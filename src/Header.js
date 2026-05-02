import './Header.css';

function Header() {
  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="header">
      <h1>SénTransport</h1>
      <p className="subtitle">Votre guide du transport en commun a Dakar</p>
      <p className="date">{today}</p>
    </header>
  );
}

export default Header;