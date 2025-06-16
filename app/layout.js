import './globals.css'

export const metadata = {
  title: 'La Voie du Freelance - Accompagnement vers l\'indépendance',
  description: 'Transformez votre carrière avec un accompagnement personnalisé',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
} 