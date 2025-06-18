'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - La Voie du Freelance</title>
        <meta name="description" content="Contactez Loïc pour toute question sur l'accompagnement freelance." />
      </Head>

      <header className="contact-header">
        <nav className="contact-nav">
          <Link href="/" className="logo">La Voie du Freelance</Link>
        </nav>
      </header>

      <section className="contact-section py-16">
        <div className="container max-w-2xl mx-auto text-center px-4">
          <h1 className="section-title text-4xl font-bold mb-8">Contactez-moi</h1>

          <div className="contact-card bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center mb-6">
              <i className="fas fa-envelope contact-icon text-blue-600 text-5xl mb-4"></i>
              <p className="text-lg mb-4">
                Vous avez une question sur l&apos;accompagnement ou souhaitez en savoir plus ?
              </p>
              <p className="text-xl font-semibold mb-4">
                N&apos;hésitez pas à m&apos;envoyer un email à :
              </p>
              <a
                href="mailto:desailly.consulting@gmail.com"
                className="contact-email text-blue-600 hover:text-blue-800 font-medium text-2xl"
              >
                desailly.consulting@gmail.com
              </a>
            </div>

            <div className="contact-reassurance mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-lg font-medium text-gray-700">
                <i className="fas fa-handshake mr-2 text-blue-500"></i>
                Je m&apos;engage à vous répondre personnellement dans un délai de 24 à 48 heures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 