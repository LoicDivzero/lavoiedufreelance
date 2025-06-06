require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../')); // Servir les fichiers statiques du dossier parent

// Configuration de l'email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route pour créer une intention de paiement
app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount, calendlyEventId } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'eur',
            metadata: {
                calendlyEventId
            }
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Webhook Stripe pour gérer les événements de paiement
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error('Webhook Error:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Gérer l'événement de paiement réussi
    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        const calendlyEventId = paymentIntent.metadata.calendlyEventId;

        // Envoyer l'email de confirmation
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: paymentIntent.receipt_email,
                subject: 'Confirmation de votre session découverte',
                html: `
                    <h1>Votre session découverte est confirmée !</h1>
                    <p>Merci pour votre paiement. Votre session découverte a été confirmée.</p>
                    <p>Détails de la session :</p>
                    <ul>
                        <li>Date : [Date du créneau Calendly]</li>
                        <li>Durée : 1 heure</li>
                        <li>Format : Visioconférence Zoom</li>
                    </ul>
                    <p>Un lien Zoom vous sera envoyé 24h avant la session.</p>
                    <p>À bientôt !</p>
                `
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }

    res.json({ received: true });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 