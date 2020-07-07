import React from 'react';
import { Link } from 'react-router-dom';

const PlaceListItem = (props) => {
    const {place}=props
    return(
        <div>
            <li key={place.name}>
            <Link to={`/place-details/${place.id}`}>{place.name}</Link>
            </li>
        </div>
    )
}

export default PlaceListItem;