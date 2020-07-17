import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Home from '../assets/images/home.png'
import Clean from '../assets/images/clean.png'
import Best from '../assets/images/best.png'
import Agenda from '../assets/images/agenda.png'
import MsgComponent from '../components/MsgComponent';
import Footer from '../components/Footer';

const DetailsPlace = () => {
    const [card, setCard] = useState({});
    let { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            const result = await Axios.get(`http://localhost:8001/api/places/${id}`)
            console.log(result)

            setCard(result.data)
        }
        fetchData()
    }, [])

    return (
        <div className="card">
            <div className="card_annonce">
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>&lang; &nbsp;&nbsp; Logement • Airbnb</Link>
                <div className="card_annonce_main"> 
                    <div className="card_annonce_main_images">
                        <img className="card_annonce_main_images_cover" src={card.imageOne} alt="cover appartement" />
                        <div className="card_annonce_main_images_other">
                            <img className="card_annonce_main_images_other_k" src={card.imageTwo} alt="kitchen appartement" />
                            <img className="card_annonce_main_images_other_b" src={card.imageThree} alt="bathroom appartement" />
                        </div>
                    </div>
                    <h2 className="card_annonce_main_title">{card.name}</h2>
                </div>

                <div className="card_annonce_logement">
                    <div className="card_annonce_logement_hote">
                        <p>Logement entier
                        <br></br>
                        Hôte : {card.userName}</p>
                    </div>
                    <p className="card_annonce_logement_info">{card.maxGuests} voyageur(s) • {card.rooms} chambre(s) • {card.bathrooms} salle(s) de bain </p>
                    <div className="card_annonce_logement_separator"></div>
                </div>

                <div className="card_annonce_condition">
                    <div>
                        <h3><img src={Home}/> Logement entier</h3>
                        <p>Vous aurez le logement (appartement) rien que pour vous.</p>
                    </div>
                    <div>
                        <h3><img src={Clean}/> Nettoyage</h3>
                        <p>Cet hôte s'est engagé à suivre un protocole de nettoyage rigoureux élaboré en partenariat avec d'éminents experts de la santé et de l'accueil.</p>
                    </div>
                    <div>
                        <h3><img src={Best}/> {card.userName} est un Superhost</h3>
                        <p>Les Superhosts sont des hôtes expérimentés qui bénéficient de très bonnes évaluations et qui s'engagent à offrir d'excellents séjours aux voyageurs.</p>
                    </div>
                    <div>
                        <h3><img src={Agenda}/> Annulation gratuite pendant 48 heures</h3>
                        <p>Au-delà, annulez jusqu'à 7 jours avant l'arrivée prévue pour obtenir un remboursement à hauteur de 50%, moins les frais de service.</p>
                    </div>
                    <div className="card_annonce_condition_separator"></div>
                </div>

                <div className="card_annonce_details">
                    <p className="card_annonce_details_description">{card.description}</p>
                    <p className="card_annonce_details_seeMore">Voir plus d'éléments &rang;</p>
                    <a className="card_annonce_details_contact" href="#">Contacter l'hôte</a>
                </div>
            </div>
            
        <MsgComponent />
        <Footer />
        </div>
    )
}

export default DetailsPlace
