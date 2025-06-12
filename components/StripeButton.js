import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// URL de l'API en fonction de l'environnement
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://lavoiedufreelance.vercel.app'
  : 'http://localhost:3000';

export default function StripeButton({ amount, calendlyEventId, buttonText = 'Payer maintenant' }) {
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      
      // Créer l'intention de paiement via le backend Express
      const response = await fetch(`${API_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          calendlyEventId,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirmer le paiement avec Stripe
      const result = await stripe.confirmCardPayment(clientSecret);

      if (result.error) {
        console.error(result.error);
      } else if (result.paymentIntent.status === 'succeeded') {
        // Le paiement a réussi
        console.log('Paiement réussi !');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {buttonText}
    </button>
  );
} 