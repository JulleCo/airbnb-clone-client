import React from 'react'


function CreatePlacePrice (props){
    const {createPlace}=props

    const handleChange = (event) => {
        setCreatePlace({...createPlace, [event.target.name]: event.target.value})
    }

    return (
        <div className="createPlaceForm_priceByNight">
                <h2>Le prix a la nuit</h2>
                <h3>Etape 5</h3>
                <h3>Vous etes responsable du choix du prix de votre logement</h3>
                <input type="text" name="priceByNight" id="priceByNight" value={createPlace.priceByNight} onChange={handleChange} required/>
                
                <button className="createPlaceForm_next" type="submit">Continuer</button>
        </div>
    )
}
export default CreatePlacePrice