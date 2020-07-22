import React from 'react'
import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram  } from 'react-icons/fa'

function Footer() {
    return (
        <div className='FooterContent'>
            <div className='FooterContent_propos'>
                <h5>À PROPOS</h5>
                <ul>
                    <div className='FooterContent_propos_links'>
                        <div className='FooterContent_propos_links_link'><li><a href='#'>Fonctionnement d'Airbnb</a></li></div>
                        <div className='FooterContent_propos_links_link'><li><a href='#'>Diversité et intégration</a></li></div>
                        <div className='FooterContent_propos_links_link'><li><a href='#'>Accessibilité</a></li></div>
                        <div className='FooterContent_propos_links_link'><li><a href='#'>Confiance et sécurité</a></li></div>
                        <div className='FooterContent_propos_links_link'><li><a href='#'>Airbnb Citizen</a></li></div>
                        <div className='FooterContent_propos_links_link'><li><a href='#'>Jeux olympiques</a></li></div>
                        <div className='FooterContent_propos_links_link'><li><a href='#'>Newsroom</a></li></div>
                    </div>
                </ul>
            </div>
            <hr />
            <div className='FooterContent_communaute'>
                <h5>COMMUNAUTÉ</h5>
                <ul>
                    <div className='FooterContent_communaute_links'>
                        <div className='FooterContent_communaute_links_link'><li><a href='#'>Airbnb Magazine</a></li></div>
                        <div className='FooterContent_communaute_links_link'><li><a href='#'>Partenaires Airbnb</a></li></div>
                        <div className='FooterContent_communaute_links_link'><li><a href='#'>Airbnb for Work</a></li></div>
                        <div className='FooterContent_communaute_links_link'><li><a href='#'>Inviter des amis</a></li></div>
                        <div className='FooterContent_communaute_links_link'><li><a href='#'>Carrière</a></li></div>
                    </div>
                </ul>
            </div>
            <hr />
            <div className='FooterContent_hote'>
                <h5>HÔTE</h5>
                <ul>
                    <div className='FooterContent_hote_links'>
                        <div className='FooterContent_hote_links_link'><li><a href='#'>Héberger des voyageurs</a></li></div>
                        <div className='FooterContent_hote_links_link'><li><a href='#'>Organiser une expérience en ligne</a></li></div>
                        <div className='FooterContent_hote_links_link'><li><a href='#'>Message de Brian Chesky, président d'Airbnb</a></li></div>
                        <div className='FooterContent_hote_links_link'><li><a href='#'>Accueil responsable</a></li></div>
                        <div className='FooterContent_hote_links_link'><li><a href='#'>Open Homes</a></li></div>
                        <div className='FooterContent_hote_links_link'><li><a href='#'>Centre de ressources</a></li></div>
                        <div className='FooterContent_hote_links_link'><li><a href='#'>Community Centre</a></li></div>
                    </div>
                </ul>
            </div>
            <hr />
            <div className='FooterContent_assistance'>
                <h5>ASSISTANCE</h5>
                <ul>
                    <div className='FooterContent_assistance_links'>
                        <div className='FooterContent_assistance_links_link'><li><a href='#'>Dernières informations relatives au COVID-19</a></li></div>
                        <div className='FooterContent_assistance_links_link'><li><a href='#'>Centre d'aide</a></li></div>
                        <div className='FooterContent_assistance_links_link'><li><a href='#'>Options d'annulation</a></li></div>
                        <div className='FooterContent_assistance_links_link'><li><a href='#'>Service d'aide aux voisins</a></li></div>
                    </div>
                </ul>
            </div>
            <hr />
            <div className='FooterContent_legal'>
                <p className='FooterContent_legal_top'><div className='FooterContent_legal_top_globe'><FaGlobe /></div>Français (FR)  <span>€ EUR</span> <div className='FooterContent_legal_top_socialMedia'> <div className='FooterContent_legal_top_socialMedia_face'><FaFacebookF /></div> <div className='FooterContent_legal_top_socialMedia_twit'><FaTwitter/></div> <div className='FooterContent_legal_top_socialMedia_insta'><FaInstagram /></div></div></p>
                <p className='FooterContent_legal_middle'>© 2020 Airbnb, Inc. All rights reserved</p>
                <p className='FooterContent_legal_bottom'>Confidentialité • Conditions • Plan du site • Fonctionnement du site • Informations sur l'entreprise</p>
            </div>       
       </div>
    )
}

export default Footer
