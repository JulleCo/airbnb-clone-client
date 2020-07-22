import React from 'react'

function CreatePlaceDescritption(props) {
    const {createPlace}=props

    const handleChange = (event) => {
        setCreatePlace({...createPlace, [event.target.name]: event.target.value})
    }

    return (
        <div className="createPlaceForm_description">
            <h2>Description du logement</h2>
            <h3>Etape 2</h3>
            <h3>La description de votre logement doit permettre aux voyageurs de s'imaginer ce que serait un séjour chez vous.</h3>
            <input type="text" name="description" id="description" value={createPlace.description} onChange={handleChange} required/>
            
            <button className="createPlaceForm_next" type="submit">Continuer</button>
        </div>
    )
}

export default CreatePlaceDescritption
