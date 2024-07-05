import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DisconnectButton from '../disconnect/DisconnectButton';
import './../../style/header.css';

const Header = () => {

  // Récupération des informations du reducer sur l'utilisateur connecté.
  const { userSession } = useSelector( state => state) ;

    return (
    <>
      <header className="Header">
        <h1 className="Nav-title">Bienvenue sur l'intranet</h1>
        <nav className="Nav">
          {/* Si l'utilisateur est connecté on affiche les lienx correspondants des routes protégées. */}
          {userSession.length > 0 ?
            <>
                <p className="Nav-link"><Link to="/infos-personnelles">Bonjour {userSession[0].firstname} {userSession[0].lastname}</Link></p>
                <img style={{width: "50px", height:'50px', borderRadius: '100%'}}src={userSession[0].photo} alt={userSession[0].photo} />
                <p className="Nav-link"><Link to="/collaborateurs">Liste</Link></p>
                <p className="Nav-link"><Link to="/infos-personnelles">Mon profil</Link></p>
                <p className="Nav-link"><Link to="/rechercher">Rechercher</Link></p>
                
                {/* Si l'utilisateur connecté est un admin on affiche l'ajout de collaborateur. */}
                {userSession[0].isAdmin ? 

                  <p className="Nav-link"><Link to="/collaborateur/ajouter">Ajouter un collaborateur</Link></p>
                :
                  null
                }
              <DisconnectButton/>
            </>
          :
            null }
        </nav>
      </header>
      <br />
    </>
        
    )
}

export default Header;