export default function Merci2() {
  return (
    <div className="merci-container" style={{textAlign: 'center', padding: '4rem 1rem'}}>
      <h1 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Merci pour votre paiement !</h1>
      <div className="hero-image-merci" style={{position: 'relative', minHeight: '300px', margin: '2rem auto', maxWidth: '900px', borderRadius: '1rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div
          className="hero-background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(rgba(37, 99, 235, 0.10), rgba(30, 64, 175, 0.65)), url('/images/ratrace.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: 1,
            width: '100%',
            height: '100%',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: '2rem',
              fontWeight: 700,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
              background: 'rgba(30,64,175,0.6)',
              borderRadius: '1rem',
              padding: '1.5rem 2.5rem',
              margin: 'auto',
            }}
          >
            Bravo d&apos;avoir sauté le pas !
          </span>
        </div>
      </div>
      <a href="/" className="cta-button primary">Retour à l'accueil</a>
    </div>
  );
} 