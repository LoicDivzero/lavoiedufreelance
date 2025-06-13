import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone } = req.body;

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 240000, // Amount in cents (2400€)
            currency: 'eur',
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                name,
                email,
                phone
            }
        });

        // Send email notification to admin
        const adminEmail = process.env.ADMIN_EMAIL;
        const emailContent = `
            Nouvelle commande reçue !
            
            Détails du client :
            Nom : ${name}
            Email : ${email}
            Téléphone : ${phone}
            
            Montant : 2400€
            
            Veuillez contacter le client dans les 24 heures.
        `;

        // You can use your preferred email service here
        // For example, using SendGrid, AWS SES, or any other email service
        // This is just a placeholder - you'll need to implement the actual email sending
        console.log('Email to be sent:', {
            to: adminEmail,
            subject: 'Nouvelle commande - Voie Freelance',
            text: emailContent
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
} 