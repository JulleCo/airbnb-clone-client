import React, { useState } from 'react';
import Axios from 'axios';
import CreatePlaceName from './CreatePlaceName';
import CreatePlaceDescription from './CreatePlaceDescritption';
import CreatePlaceRooms from './CreatePlaceRooms';
import CreatePlacePrice from './CreatePlacePrice';
import CreatePlaceBathrooms from './CreatePlaceBathrooms';
import CreatePlaceImages from './CreatePlaceImages';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert'


function CreatePlaceMain(props) {
    const [createPlace, setCreatePlace] = useState(
        { name: '', description: '', rooms: '', bathrooms: '', priceByNight: '' , maxGuests:'', imageOne:'', imageTwo:'', imageThree:'',cityName:''}
    );

    // const [redirect, setRedirect] = useState(
    //     false
    // )

    const [errorForm, setErrorForm] = useState(" ")

    //  const alert = useAlert()

    const handleChange = (event) => {
        setCreatePlace({...createPlace, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:8001/api/places', createPlace)
            .then((response) => {
                console.log("#666",response)
                setCreatePlace({  name: '', description: '', rooms: '', bathrooms: '', priceByNight: '' , maxGuests:'', imageOne:'', imageTwo:'', imageThree:'',idCity:''})
                // setRedirect(true)
                // props.setIsOpen(false)
                // alert.show('Inscription validée!')
            })
            .catch((error) => {
                // console.log("#777",error.response)
                // console.log("#777",typeof error)
                setErrorForm(error.response.data.error)
            })
    }



    return (
        <form id="createPlaceForm" method="POST" action="/places" onSubmit={handleSubmit}>
           
            {/* <CreatePlaceName createPlace={createPlace} /> */}
            <div className="createPlaceForm_name">
                <h2>Nous allons vous aider à publier votre annonce</h2>
                <h3>Etape 1</h3>
                <h3>Quel type de logement avez-vous?</h3>
                <label>Nom de la location</label>
                <input type="text" name="name" id="name" value={createPlace.name} onChange={handleChange} required/>
                <label>Dans quelle ville ?</label>
                <input type="text" name="cityName" id="cityName" value={createPlace.cityName} onChange={handleChange} required/>
                <label>Nombre d'occupants possible :</label>
                <input type="number" name="maxGuests" id="maxGuests" value={createPlace.maxGuests} onChange={handleChange} required/>
                {/* <button className="createPlaceForm_name_next" type="submit">Continuer</button> */}
            </div>

            {/* <CreatePlaceDescription createPlace={createPlace} /> */}
            <div className="createPlaceForm_description">
                <h2>Description du logement</h2>
                <h3>Etape 2</h3>
                <h3>La description de votre logement doit permettre aux voyageurs de s'imaginer ce que serait un séjour chez vous.</h3>
                <input type="text" name="description" id="description" value={createPlace.description} onChange={handleChange} required/>
                
                {/* <button className="createPlaceForm_next" type="submit">Continuer</button> */}
            </div>

            {/* <CreatePlaceRooms createPlace={createPlace} /> */}
            <div className="createPlaceForm_rooms">
                <h2>Nombre de chambres</h2>
                <h3>Etape 3</h3>
                <h3>Combien y a t-il de chambres?</h3>
                <input type="number" name="rooms" id="rooms" value={createPlace.rooms} onChange={handleChange} required/>
                
                {/* <button className="createPlaceForm_next" type="submit">Continuer</button> */}
            </div>

            {/* <CreatePlaceBathrooms createPlace={createPlace} /> */}
            <div className="createPlaceForm_bathrooms">
                <h2>Nombre de salle de bain</h2>
                <h3>Etape 4</h3>
                <h3>Combien y a t-il de salle de bain?</h3>
                <input type="number" name="bathrooms" id="bathrooms" value={createPlace.bathrooms} onChange={handleChange} required/>
                
                {/* <button className="createPlaceForm_next" type="submit">Continuer</button> */}
            </div>

            {/* <CreatePlacePrice createPlace={createPlace} /> */}
            <div className="createPlaceForm_priceByNight">
                <h2>Le prix a la nuit</h2>
                <h3>Etape 5</h3>
                <h3>Vous etes responsable du choix du prix de votre logement</h3>
                <input type="number" name="priceByNight" id="priceByNight" value={createPlace.priceByNight} onChange={handleChange} required/>
                
                {/* <button className="createPlaceForm_next" type="submit">Continuer</button> */}
            </div>

            {/* <CreatePlaceImages createPlace={createPlace} /> */}
            <div className="createPlaceForm_images">
                <h2>Photos</h2>
                <h3>Etape 6</h3>
                <h3>Ajoutez des photos qui donnent aux voyages un aperçu de votre logement</h3>
                <input type="text" name="imageOne" id="imageOne" value={createPlace.imageOne} onChange={handleChange} required/>

                <input type="text" name="imageTwo" id="imageTow" value={createPlace.imageTwo} onChange={handleChange} required/>
                
                <input type="text" name="imageThree" id="imageThree" value={createPlace.imageThree} onChange={handleChange} required/>
                <button className="createPlaceForm_images_submit" type="submit">Envoyer</button>
            </div>

            <div>
                {
                    errorForm
                }
            </div>

            {/* {
                redirect ?<Redirect to="/"/>:null
            } */}
    </form>
    )
}

export default CreatePlaceMain