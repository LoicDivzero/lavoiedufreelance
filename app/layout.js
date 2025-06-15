export const metadata = {
  title: 'La Voie du Freelance',
  description: 'Accompagnement personnalisé pour freelances',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
} 