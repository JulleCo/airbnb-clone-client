import React, { useState } from 'react';
import Axios from 'axios';

function Signup() {
    const [signup, setSignup] = useState(
        { firstName: '', lastName: '', email: '', password: '' }
    );

    const handleChange = (event) => {
        setSignup({...signup, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:8001/api/signup', signup)
            .then((response) => {
                console.log("#666",response)
            })
            .catch((error) => {
                console.log("#777",error)
                return response.status(500).json({
                    'error': "Impossible de faire cela"
                })
            })
    }



    return (
        <form id="signupForm" method="POST" action="/signup" onSubmit={handleSubmit}>
            {/* <div>
                <label for="host">Je deviens hôte</label>   
                <p>Je deviens hôte</p>
                <input type="radio" id="host" name="role" value="host" onChange={handleChange} checked/>
            </div>

            <div>  
                <label for="tourist">Je veux louer un endroit cool</label>  
                <p>Je veux louer un endroit cool</p>
                <input type="radio" id="tourist" name="role" value={signup.role} onChange={handleChange}/>
            </div> */}

            <div className="signupForm_role">
                <p>Vous inscrivez-vous en tant que : "host" ou "tourist" ?</p>
                <input type="text" name="role" id="host" value={signup.role} onChange={handleChange} required/>
            </div>


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
                <input type="email" name="email" id="email" value={signup.email} onChange={handleChange} required />
            </div>

            <div className="signupForm_password">
                <p>Password (6 characters minimum, 1 capitale, 1 chiffre):</p>
                {/* <label for="pass">Password (6 characters minimum, 1 capitale, 1 chiffre):</label> */}
                <input type="password" id="pass" name="password" value={signup.password} onChange={handleChange} required />
            </div> 

            <button className="signupForm_submit" type="submit">Envoyer</button>
    </form>
    )
}

export default Signup