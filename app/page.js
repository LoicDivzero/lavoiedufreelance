'use client'

import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Smooth scroll pour les ancres avec décélération
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1500; // durée en millisecondes
          let start = null;

          function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Fonction d'easing pour la décélération
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            
            window.scrollTo(0, startPosition + (distance * easeOutCubic));
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          }

          requestAnimationFrame(animation);
        }
      });
    });
  }, []);

  return (
    <div className="container">
      <Script src="/script.js" strategy="afterInteractive" />
      
      <header className="hero">
        <div className="hero-background"></div>
        <nav>
          <div className="logo">La Voie du Freelance</div>
          <Link href="#pricing" scroll={false} className="cta-button">Tarifs</Link>
        </nav>
        <div className="hero-content">
          <h1>De salarié à indépendant, en toute confiance</h1>
          <p className="subtitle">Transformez votre carrière avec un accompagnement personnalisé</p>
          <button className="cta-button primary" onClick={() => window.location.href = '/paiement-accompagnement.html'}>
            Commencer l&apos;accompagnement
          </button>
        </div>
      </header>

      <section className="target-audience">
        <h2>À qui s&apos;adresse cet accompagnement ?</h2>
        <div className="audience-grid">
          <div className="audience-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Professionnels IT & Logistique</h3>
            <p>Vous êtes salarié(e) dans l&apos;informatique, la logistique ou un domaine connexe</p>
          </div>
          <div className="audience-card">
            <i className="fas fa-rocket"></i>
            <h3>Futurs Indépendants</h3>
            <p>Vous réfléchissez à quitter votre emploi pour devenir indépendant(e)</p>
          </div>
          <div className="audience-card">
            <i className="fas fa-handshake"></i>
            <h3>Besoin de Support</h3>
            <p>Vous avez besoin d&apos;un cadre clair et d&apos;un soutien humain</p>
          </div>
          <div className="audience-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Prudence & Expertise</h3>
            <p>Vous ne voulez pas faire d&apos;erreurs coûteuses sur le choix du statut, les tarifs, ou la prospection</p>
          </div>
        </div>
      </section>

      <section className="program">
        <h2>Ce que vous allez apprendre et mettre en place</h2>
        <div className="program-timeline">
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Analyse de Situation</h3>
              <p>Faire le point sur votre expérience, compétences et spécialités</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Statut Juridique</h3>
              <p>Choisir le bon statut juridique (auto-entreprise, société, portage, etc.)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Profil Professionnel</h3>
              <p>Construire votre profil freelance (CV, LinkedIn, plateformes)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Prospection</h3>
              <p>Trouver vos premières missions et clients (ESN, plateformes, réseaux)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Deux formules disponibles</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>🧭 Bilan express pour vous lancer sans engagement</h3>
            <div className="price-description">🧠 Besoin d'un déclic pour passer freelance ?<br />Cette session est faite pour vous.</div>
            <div className="price">49 € TTC</div>
            <ul>
              <li><i className="fas fa-check"></i> Débloquez votre situation en 1 heure</li>
              <li><i className="fas fa-check"></i> Repartez avec un plan d&apos;actions clair</li>
              <li><i className="fas fa-check"></i> Posez toutes vos questions (même les taboues)</li>
            </ul>
            <div className="cta-button-container">
              <Link href="/reservation.html" className="cta-button primary">
                Je réserve ma session à 49 €
              </Link>
              <div className="reassurance">🔒 Paiement sécurisé — Aucun engagement</div>
            </div>
          </div>
          <div className="pricing-card featured">
            <h3>✅ Coaching premium jusqu’à votre 1er client</h3>
            <div className="price-description">🚀 Passez freelance en étant guidé de A à Z <br />Sans vous perdre, ni procrastiner.</div>
            <div className="price">799 € TTC</div>
            <ul>
              <li>💬 Coaching illimité jusqu’à votre lancement</li>
              <li>🤝 Suivi personnalisé entre chaque session</li>
              <li>🧰 Outils & modèles prêts à l’emploi</li>
              <li>🔓 Accès à vie à toutes les ressources</li>
            </ul>
            <button className="cta-button primary" onClick={() => window.location.href = '/paiement-accompagnement.html'}>
              Commencer mon accompagnement →
            </button>
          </div>
        </div>
      </section>

      <section className="trust">
        <h2>Pourquoi me faire confiance ?</h2>
        <div className="trust-content">
          <p>Je ne suis pas un coach business. Je suis un <strong>freelance opérationnel</strong>, exactement comme vous souhaitez le devenir.</p>
          <p>Je connais les questions que vous vous posez. Les doutes. Les "et si je n&apos;y arrive pas ?". Les devis qu&apos;on n&apos;ose pas envoyer. Les premières missions sous-payées qu&apos;on accepte par peur.</p>
          <p>Je vous propose un <strong>accompagnement honnête, humain, sans jargon, sans promesse magique</strong>. Seulement ce qui fonctionne vraiment, dans le réel.</p>
        </div>
      </section>

      <section className="faq">
        <h2>Questions fréquentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Puis-je suivre l&apos;accompagnement tout en étant encore salarié ?</h3>
            <p>Oui. Vous pouvez préparer votre lancement en parallèle de votre CDI.</p>
          </div>
          <div className="faq-item">
            <h3>Et si je ne suis pas sûr(e) d&apos;avoir une spécialité ?</h3>
            <p>Nous travaillons ensemble pour identifier votre positionnement.</p>
          </div>
          <div className="faq-item">
            <h3>Garantissez vous que je vais trouver une mission ?</h3>
            <p>Je ne vends pas de rêve. Mais je vous donne tous les outils, méthodes et retours d&apos;expérience nécessaires pour maximiser vos chances et limiter les risques.</p>
          </div>
          <div className="faq-item">
            <h3>Puis-je payer en plusieurs fois ?</h3>
            <p>Oui, un paiement en 2 ou 3 fois est possible pour la formule complète. Il suffit de me le demander.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="contact">
            <h3>Contact</h3>
            <p>Loïc</p>
            <p>Consultant freelance & accompagnant vers l&apos;indépendance</p>
          </div>
          <div className="cta-footer">
            <button className="cta-button primary" onClick={() => window.location.href = '/paiement-accompagnement.html'}>
              Commencer l&apos;accompagnement
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
} 