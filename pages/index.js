import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>La Voie du Freelance</title>
        <meta name="description" content="Accompagnement personnalisé pour freelances" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur La Voie du Freelance
        </h1>

        <p className={styles.description}>
          Votre guide vers le succès en freelance
        </p>

        <div className={styles.grid}>
          <a href="#services" className={styles.card}>
            <h2>Services &rarr;</h2>
            <p>Découvrez nos services d&apos;accompagnement personnalisé.</p>
          </a>

          <a href="#about" className={styles.card}>
            <h2>À propos &rarr;</h2>
            <p>En savoir plus sur notre approche et notre mission.</p>
          </a>

          <a href="#contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Prenez rendez-vous pour un premier échange.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 La Voie du Freelance. Tous droits réservés.</p>
      </footer>
    </div>
  )
} 