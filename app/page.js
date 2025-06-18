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
          <p className="subtitle">Un accompagnement structuré pour franchir le cap sereinement, gagner en liberté et augmenter votre rémunération</p>
          <button className="cta-button primary" onClick={() => window.location.href = '/paiement-accompagnement.html'}>
            Commencer l&apos;accompagnement →
          </button>
        </div>
      </header>

      <section className="target-audience">
        <h2>Cet accompagnement s’adresse à vous si…</h2>
        <div className="audience-grid">
          <div className="audience-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Vous êtes salarié dans un métier technique</h3>
            <p>Informatique, logistique, ou tout domaine où l’indépendance est possible mais sans mode d'emploi évident.</p>
          </div>
          <div className="audience-card">
            <i className="fas fa-rocket"></i>
            <h3>Vous envisagez de quitter votre emploi salarié</h3>
            <p>Vous souhaitez devenir indépendant, mais vous avez besoin d’un cadre pour le faire sans risque inutile.</p>
          </div>
          <div className="audience-card">
            <i className="fas fa-handshake"></i>
            <h3>Vous souhaitez un accompagnement structuré</h3>
            <p>Vous ne cherchez pas de discours magique, mais un cadre clair et un vrai soutien humain.</p>
          </div>
          <div className="audience-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Vous voulez éviter les erreurs coûteuses</h3>
            <p>Choix du statut, tarification, prospection… vous préférez avancer avec méthode et recul.</p>
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
              <p>Identifier vos forces, expertises et options pour un positionnement freelance cohérent</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Profil Professionnel</h3>
              <p>Créer un profil freelance convaincant et crédible pour décrocher vos premières missions (CV, LinkedIn, plateformes). Ensemble, nous créerons votre "CV de freelance" dont la forme est très différente d'un CV classique !</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Bien préparer son départ</h3>
              <p>Comprendre les différentes options de sortie, connaître les conséquences sur vos droits au chômage, et garder le contrôle du timing.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Mobiliser les aides de l'Etat</h3>
              <p>Comprendre les conditions d’éligibilité, les démarches à faire au bon moment, et comment ces aides s’articulent entre elles. Je vous accompagne dans les formalités administratives.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Tarification</h3>
              <p>Fixer votre tarif journalier moyen (TJM) avec justesse, selon le marché et votre expérience. Apprendre à dire non sans culpabiliser.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Statut Juridique</h3>
              <p>Comparer les options juridiques pour choisir celle qui protège au mieux vos intérêts (auto-entreprise, société, portage…). J'effectue les démarches de création avec vous.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Décrocher sa première misson !</h3>
              <p>Je vous constituerai un carnet d’adresses personnalisé avec les apporteurs d’affaires pertinents de votre région et je vous accompagnerai lors de vos premiers échanges avec eux.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Organisation & gestion</h3>
              <p>Apprendre à gérer votre activité au quotidien : factures, comptes-rendus d'activité, notes de frais, communication… sans vous noyer. Je vous fournirai tous les modèles de documents et vous expliquerai comment ils fonctionnent.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon"><i className="fas fa-check-circle"></i></div>
            <div className="timeline-content">
              <h3>Rejoignez une communauté bienveillante</h3>
              <p>Vous ne serez pas seul après le lancement : vous rejoindrez une communauté d’indépendants que j’ai déjà accompagnés, dans un espace privé dédié. Vous y trouverez du soutien entre pairs, des astuces, et des opportunités de missions qui circulent régulièrement.</p>
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
            <h3>✅ Coaching premium jusqu'à votre 1er client</h3>
            <div className="price-description">🚀 Passez freelance en étant guidé de A à Z <br />Sans vous perdre, ni procrastiner.</div>
            <div className="price">799 € TTC</div>
            <ul>
              <li>💬 Coaching illimité jusqu'à votre lancement</li>
              <li>🤝 Suivi personnalisé entre chaque session</li>
              <li>🧰 Outils & modèles prêts à l'emploi</li>
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
            <Link href="/contact" className="text-white hover:text-gray-200">
              <h3>Contact</h3>
            </Link>
            <p>Loïc</p>
            <p>Consultant freelance & accompagnant vers l&apos;indépendance</p>
          </div>
          <div className="cta-footer">
            <button className="cta-button" onClick={() => window.location.href = '/reservation.html'}>
              Réserver une heure en visio
            </button>
            <button className="cta-button primary" onClick={() => window.location.href = '/paiement-accompagnement.html'}>
              Commencer mon accompagnement →
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
} 