export default function Merci() {
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

      <div style={{maxWidth: '600px', margin: '2rem auto', fontSize: '1.15rem', textAlign: 'left', background: 'rgba(255,255,255,0.95)', borderRadius: '0.75rem', padding: '1.5rem 1.2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)'}}>
        <p style={{marginBottom: '1rem'}}>Je vais maintenant vous contacter personnellement par e-mail sous 24h pour fixer ensemble la date de notre session visio !</p>
        <p style={{marginBottom: '1rem'}}>Vérifiez bien votre boîte mail — et pensez à regarder dans vos spams si vous ne voyez rien arriver.</p>
        <p style={{marginBottom: 0}}>📩 Une question d'ici là ? Vous pouvez me répondre directement ou m'écrire à <strong>desailly.conseil@gmail.com</strong></p>
      </div>

      <a href="/" className="cta-button primary">Retour à l'accueil</a>
    </div>
  );
} 