import { AccueilHeader } from "../components/AccueilHeader";
import { Playlist } from "../components/Playlist";
import { Album } from "../components/Album";
import { Lecteur } from "../components/Lecteur";
import './MyMusics.css';

export function MyMusics() {
  return (
    <>
      <title>Page d&apos;accueil</title>

      <AccueilHeader />

      {/* Sidebar de l'accueil */}
      <div className="sidebar-accueil">
        <div className="menu-sidebar">
          <div className="profile-container">
            <img className="profile-image" src="/images/steeven.jpg" alt="Profil de l'utilisateur" />
            <p className="profile-name">Steeven Zengu</p>
          </div>
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

      {/* Les Cover des musiques */}
      <Album />

      {/* Listes des musiques */}
      <Playlist />

      {/* Contenu du lecteur */}
      <Lecteur />
    </>
  );
}