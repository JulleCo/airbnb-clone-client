import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';


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
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <ul>
                <li>Nombres de personnes possibles : {card.maxGuests}</li>
                <li>Tarif par nuit : {card.priceByNight}</li>
                <li>Nombre de chambres dans le logement : {card.rooms}</li>
                <li>Nombre de salle de bain dans le logement : {card.bathrooms}</li>
            </ul>
        </div>
    )
}

export default DetailsPlace
