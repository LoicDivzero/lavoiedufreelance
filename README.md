# La Voie du Freelance

Plateforme de mise en relation entre freelances et clients.

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/LoicDivzero/lavoiedufreelance.git
cd lavoiedufreelance
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_publique_stripe
STRIPE_SECRET_KEY=votre_clé_secrète_stripe
STRIPE_WEBHOOK_SECRET=votre_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

## Déploiement

Le projet est configuré pour être déployé sur Vercel. Assurez-vous d'avoir configuré les variables d'environnement dans les paramètres du projet Vercel.

## Technologies utilisées

- Next.js
- React
- Stripe
- Vercel 