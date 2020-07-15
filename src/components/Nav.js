import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-airbnb-desktop.png'
import ExplorerRed from '../assets/images/logo-red-airbnb.png'
import ExplorerGrey from '../assets/images/logo-grey-airbnb.png'
import EnregistreRed from '../assets/images/like-red.png'
import EnregistreGrey from '../assets/images/like-grey.png'
import ConnexionRed from '../assets/images/utilisateur-red.png'
import ConnexionGrey from '../assets/images/utilisateur-grey.png'
import HyperModal from 'react-hyper-modal';
import Signup from './Signup';
import Signin from './Signin';


const Nav = () => {
    const[isOpen, setIsOpen] = useState(false)
    const openModal = () => {setIsOpen(true)}

    const[isOpenUp, setIsOpenUp] = useState(false)
    const openModalUp = () => {setIsOpenUp(true)}

    return (
        <div className="navBar">
            <nav className="navBar_navMobile">
                <Link to="/" className="navBar_navMobile_linkExplorer">
                    <img className="navBar_navMobile_linkExplorer_red" src={ExplorerRed} alt="logored"/>
                    <img className="navBar_navMobile_linkExplorer_grey" src={ExplorerGrey} alt="logogrey"/>
                    <h2>Explorer</h2>
                </Link>

                <Link to="/" className="navBar_navMobile_link">
                    <img className="navBar_navMobile_link_red" src={EnregistreRed} alt="logored"/>
                    <img className="navBar_navMobile_link_grey" src={EnregistreGrey} alt="logogrey"/>
                    <h2>Enregistrés</h2>
                </Link>

                <Link to="/signin" className="navBar_navMobile_linkConnexion">
                    <img className="navBar_navMobile_linkConnexion_red" src={ConnexionRed} alt="logored"/>
                    <img className="navBar_navMobile_linkConnexion_grey" src={ConnexionGrey} alt="logogrey"/>
                    <h2>Connexion</h2>
                </Link>
            </nav>

            <nav className="navBar_navDesktop">
                    <Link to="/" className="navBar_navDesktop_logoDesktop">
                        <img className="navBar_navDesktop_logoDesktop_image" src={Logo} alt="logo"/>
                    </Link>

                    <div className="navBar_navDesktop_menu">
                        <Link to="/" className="navBar_navDesktop_menu_link">
                            <h2>Héberger des voyageurs</h2>
                        </Link>
                        
                        <Link to="/" className="navBar_navDesktop_menu_link">
                            <h2>Créer une expérience</h2>
                        </Link>
                        
                        <Link to="/" className="navBar_navDesktop_menu_link">
                            <h2>Aide</h2>
                        </Link>
                        
                        <button onClick={openModalUp} className="navBar_navDesktop_menu_linkInscription">
                            <h2>Inscription</h2>
                        </button>
                        
                        <button onClick={openModal} className="navBar_navDesktop_menu_linkConnexion">
                            <h2>Connexion</h2>
                        </button>
                        {/* <Link to="/signin" className="navBar_navDesktop_menu_linkConnexion">
                            <h2>Connexion</h2>
                        </Link> */}
                    </div>
                    
            </nav>

            <HyperModal isOpen={isOpenUp} requestClose={()=>{setIsOpenUp(false)}}>
                <Signup setIsOpen={setIsOpenUp} />
            </HyperModal>

            <HyperModal isOpen={isOpen} requestClose={()=>{setIsOpen(false)}}>
                <Signin setIsOpen={setIsOpen} />
            </HyperModal>
        </div>
    )
}

export default Nav;