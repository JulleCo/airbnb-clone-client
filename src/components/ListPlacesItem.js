import React from 'react';
import { Link } from 'react-router-dom';

const ListPlacesItem = (props) => {
    const {place}=props
    return(
        <div className ="placeItem">
             <Link className="placeItem_link" to={`/place-details/${place.id}`}>
                <div className="placeItem_link_image">
                    <img className="placeItem_link_image_appart" src={place.imageOne} alt="image de l'appartement"/>
                </div>
                <div className="placeItem_link_infos">
                    
                    <p className="placeItem_link_infos_titre"key={place.name}>{place.name} <br></br>
                {place.description}</p>
                                    
          
                    <p className="placeItem_link_infos_details">{place.maxGuests} Voyageurs • {place.rooms} Chambres • {place.bathrooms} Salle de bain</p> 
                   
                    <p className="placeItem_link_infos_prix"><span>{place.priceByNight}€</span> / nuits</p>
                </div>
            </Link>
        </div>
       
    )
}

export default ListPlacesItem;