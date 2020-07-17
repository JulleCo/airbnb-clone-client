import React, { useState } from 'react';
import Axios from 'axios';
// import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert'


function Signup(props) {
    const [signup, setSignup] = useState(
        { role: '', firstName: '', lastName: '', email: '', password: '' }
    );

    // const [redirect, setRedirect] = useState(
    //     false
    // )

    const [errorForm, setErrorForm] = useState(" ")

    const alert = useAlert()

    const handleChange = (event) => {
        setSignup({...signup, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:8001/api/signup', signup)
            .then((response) => {
                // console.log("#666",response)
                setSignup({ role: '', firstName: '', lastName: '', email: '', password: '' })
                // setRedirect(true)
                props.setIsOpen(false)
                alert.show('Inscription validée!')
            })
            .catch((error) => {
                console.log("#777",error.response)
                console.log("#777",typeof error)
                setErrorForm(error.response.data.error)
                // return response.status(500).json({
                //     'error': "Impossible de faire cela"
                // })
            })
    }



    return (
        <form id="signupForm" method="POST" action="/signup" onSubmit={handleSubmit}>
            
            <div className="signupForm_role">
                <label> Choisissez votre rôle :</label>
                <select name="role"value={signup.role} onChange={handleChange}>
                    <option value="">…</option>
                    <option value="host">Hôte</option>
                    <option value="tourist">Touriste</option>
                </select>
            </div>
            {/* <div className="signupForm_role">
                <p>Vous inscrivez-vous en tant que : "host" ou "tourist" ?</p>
                <input type="text" name="role" id="host" value={signup.role} onChange={handleChange} required/>
            </div> */}


            <div className="signupForm_firstName">
                <p>Entrer votre prénom:</p>
                {/* <label for="firstName">Entrer votre prénom:</label> */}
                <input type="text" name="firstName" id="firstName" value={signup.firstName} onChange={handleChange} required/>
            </div>

            <div className="signupForm_lastName">
                <p>Entrer votre nom de famille:</p>
                {/* <label for="lastName">Entrer votre nom de famille:</label> */}
                <input type="text" name="lastName" id="lastName" value={signup.lastName} onChange={handleChange} required />
            </div>

            <div className="signupForm_email">
                <p>Entrer votre email:</p>
                {/* <label for="email">Entrer votre email:</label> */}
                <input type="email" name="email" id="emailSignup" value={signup.email} onChange={handleChange} required />
            </div>

            <div className="signupForm_password">
                <p>Password (6 characters minimum, 1 capitale, 1 chiffre):</p>
                {/* <label for="pass">Password (6 characters minimum, 1 capitale, 1 chiffre):</label> */}
                <input type="password" id="passSignup" name="password" value={signup.password} onChange={handleChange} required />
            </div> 

            <button className="signupForm_submit" type="submit">Envoyer</button>

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

export default Signup