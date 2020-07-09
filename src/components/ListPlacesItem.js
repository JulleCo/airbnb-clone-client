import React from 'react';
import { Link } from 'react-router-dom';

const ListPlacesItem = (props) => {
    const {place}=props
    return(
        <div>
            <li key={place.name}>
            {/* balise image one */}
            <Link to={`/place-details/${place.id}`}>{place.name}</Link>
            {/* <p> appeler balise que l'on a besoin. Titre, Salle de bains, etc... 
            Voir description Airbnb par rapport à ce que l'on a.</p> */}
            </li>
        </div>
    )
}

export default ListPlacesItem;