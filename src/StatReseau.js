import './StatReseau.css';

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((somme, ligne) => somme + ligne.arrets, 0);
  const lignePlusLongue = lignes.reduce((max, ligne) =>
    ligne.arrets > max.arrets ? ligne : max
  , lignes[0]);

  return (
    <div className="stat-reseau">
      <div className="stat-carte">
        <span className="stat-valeur">{totalLignes}</span>
        <span className="stat-label">Lignes</span>
      </div>
      <div className="stat-carte">
        <span className="stat-valeur">{totalArrets}</span>
        <span className="stat-label">Arrêts au total</span>
      </div>
      <div className="stat-carte">
        <span className="stat-valeur">Ligne {lignePlusLongue.numero}</span>
        <span className="stat-label">Plus d'arrêts ({lignePlusLongue.arrets})</span>
      </div>
    </div>
  );
}

export default StatReseau;