import React, { useState } from 'react';
import Axios from 'axios';


function Signin() {
    const [signin, setSignin] = useState(
        { email: '', password: '' }
    );

    const handleChange = (event) => {
        setSignin({...signin, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Axios.post('http://localhost:8001/api/signin', signin)
            .then((response) => {
                console.log("#888",response)
            })
            .catch((error) => {
                console.log("#999",error)
                return response.status(500).json({
                    'error': "Impossible de faire cela"
                })
            })
    }


    return (
        <form className="signinForm" method="POST" action="/signin" onSubmit={handleSubmit}>
            <div className="signinForm_email">
                <p>Entrer votre email :</p>
                {/* <label for="email">Entrer votre email: </label> */}
                <input type="email" id="email" name="email" value={signin.email} onChange={handleChange} required />
            </div>

            <div className="signinForm_password">
                <p>Password :</p>
                {/* <label for="pass">Password:</label> */}
                <input type="password" id="pass" name="password" value={signin.password} onChange={handleChange} required />
            </div> 

            <button className="signinForm_submit" type="submit">Envoyer</button>
        </form>
    )
}

export default Signin