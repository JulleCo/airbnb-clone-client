import React from 'react'

function CreatePlaceImages(props) {
    const {createPlace}=props

    const handleChange = (event) => {
        setCreatePlace({...createPlace, [event.target.name]: event.target.value})
    }

    return (
        <div className="createPlaceForm_images">
            <h2>Photos</h2>
            <h3>Etape 6</h3>
            <h3>Ajoutez des photos qui donnent aux voyages un aperçu de votre logement</h3>
            <input type="text" name="imageOne" id="imageOne" value={createPlace.imageOne} onChange={handleChange} required/>

            <input type="text" name="imageTwo" id="imageTow" value={createPlace.imageTwo} onChange={handleChange} required/>
            
            <input type="text" name="imageThree" id="imageThree" value={createPlace.imageThree} onChange={handleChange} required/>
            <button className="createPlaceForm_images_submit" type="submit">Envoyer</button>
        </div>
    )
}

export default CreatePlaceImages
