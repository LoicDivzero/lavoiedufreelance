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

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/checkout_sessions', {
        method: 'POST',
      });
  
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la redirection vers le paiement.");
      }
    } catch (err) {
      console.error(err);
      alert("Une erreur s'est produite.");
    }
  };  

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
              <li><i className="fas fa-check"></i> 1h pour débloquer votre situation</li>
              <li><i className="fas fa-check"></i> Un plan d’action clair, immédiat et réaliste</li>
              <li><i className="fas fa-check"></i> Toutes vos questions sont bienvenues</li>
              <li><i className="fas fa-check"></i> On va droit au but, sans pression ni jugement</li>
            </ul>
            <div className="cta-button-container">
            <button className="cta-button primary" onClick={handleCheckout}>
              Je réserve ma session à 49 €
            </button>
            </div>
          </div>
          <div className="pricing-card featured">
            <h3>✅ Accompagnement dédié jusqu’à votre 1er client</h3>
            <div className="price-description">🚀 Passez freelance en étant guidé de A à Z <br />Sans vous perdre, ni procrastiner.</div>
            <div className="price">799 € TTC</div>
            <ul>
              <li>💬 Suivi illimité jusqu'à votre lancement</li>
              <li>🤝 Entretiens personnalisés à chaque étape</li>
              <li>🧰 Modèles, outils & carnets d’adresses inclus</li>
              <li>🔓 Accès aux ressources et à la communauté</li>
            </ul>
            <button
              className="cta-button primary"
              onClick={async () => {
                const res = await fetch('/api/checkout_sessions_accompagnement', {
                  method: 'POST',
                });
                const data = await res.json();
                if (data.url) {
                  window.location.href = data.url;
                }
              }}
            >
              Commencer mon accompagnement →
            </button>

          </div>
        </div>
        <div className="reassurance">🔒 Paiement sécurisé via Stripe</div>
      </section>

      <section className="trust">
        <h2>Pourquoi me faire confiance ?</h2>
        <div className="trust-content">
          <p>Je ne suis pas un coach business. Je suis un freelance en activité — exactement ce que vous souhaitez devenir.</p>
          <p>Je connais les questions que vous vous posez. J'ai connu la peur de ne pas trouver de mission, de se retrouver sans salaire au début. Certains doivent convaincre leur conjoint en plus de se convaincre eux-mêmes. La croyance de ne pas avoir assez d'expérience...</p>
          <p>Puis j'ai connu le bonheur de me retrouver avec 3 salaires "d'avance" par rapport à mon salaire CDI, puis 6, puis à rapidement ne plus avoir peur d'un éventuel trou entre les missions.</p>
          <p>Je vous propose un <strong>accompagnement honnête, humain, sans jargon, sans promesse magique</strong>, basé sur le réel, et sur ce qui fonctionne <strong> vraiment</strong> sur le terrain.</p>
        </div>
      </section>

      <section className="faq">
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