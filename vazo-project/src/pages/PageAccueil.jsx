import { AccueilHeader } from "../components/AccueilHeader";
import './PageAccueil.css';

export function PageAccueil() {
  return (
    <>
      <title>Page d&apos;accueil</title>

      <AccueilHeader />

      {/* Sidebar de l'accueil */}
      <div className="sidebar-accueil">
        <div className="menu-sidebar">
          <div className="menu">Menu</div>
          <div className="composant-menu">
            <div className="composant">
              <img className="logo-composant" src="/images/accueil.png" alt="Image d'accueil" />
              <p className="nom-composant">Accueil</p>
            </div>
            
            <div className="composant">
              <img className="logo-composant" src="/images/projet.png" alt="Image d'un dossier" />
              <p className="nom-composant">Projet</p>
            </div>

            <div className="composant">
              <img className="logo-composant" src="/images/son-onde.png" alt="Image d'un son d'onde" />
              <p className="nom-composant">My Musics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu de l'accueil */}
      <div className="accueil-container">
        <div className="importer-fichier">
          <button className="importer-fichier-button">Importer un fichier</button>
        </div>

        <div className="view-accueil">
          <div className="welcoming">
            <h1>Bonjour</h1>
            <h4>Vous pouvez personnaliser vos vidéos</h4>
          </div>

          <div className="videos-accueil">
            <div className="example">
              <img className="video1" src="/images/video1.png" alt="Video 1" />
              <img className="video2" src="/images/video-telephone.png" alt="Video 2" />
              <img className="video3" src="/images/video2.png" alt="Video 3" />
            </div>

            <div className="example">
              <img className="video1" src="/images/video1.png" alt="Video 1" />
              <img className="video2" src="/images/video-telephone.png" alt="Video 2" />
              <img className="video3" src="/images/video2.png" alt="Video 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}