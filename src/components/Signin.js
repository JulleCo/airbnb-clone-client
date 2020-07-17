import React, { useState } from 'react';
import Axios from 'axios';


function Signin(props) {
    const [signin, setSignin] = useState(
        { email: '', password: '' }
    );

    const [errorForm, setErrorForm] = useState(" ")

    const handleChange = (event) => {
        setSignin({...signin, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios({
            method:'post',
            headers: { 'Content-Type': 'application/json' },
            url:'http://localhost:8001/api/signin',
            data: JSON.stringify(signin),
        })
        // .post('http://localhost:8001/api/signin', signin)
            .then((response) => {
                console.log("#888",response)
                setSignin({email:'', password:'' })
                props.setIsOpen(false)
            })
            .catch((error) => {
                console.log("#999",error.response)
                console.log("#999",typeof error)
                setErrorForm(error.response.data.error)
                // return response.status(500).json({
                //     'error': "Impossible de faire cela"
                // })
            })
    }


    return (
        <form className="signinForm" method="POST" action="/signin" onSubmit={handleSubmit}>
            <div className="signinForm_email">
                <p>Entrer votre email :</p>
                {/* <label for="email">Entrer votre email: </label> */}
                <input className="signinForm_email_input" type="email" id="email" name="email" value={signin.email} onChange={handleChange} required />
            </div>

            <div className="signinForm_password">
                <p>Password :</p>
                {/* <label for="pass">Password:</label> */}
                <input type="password" id="pass" name="password" value={signin.password} onChange={handleChange} required />
            </div> 

            <button className="signinForm_submit" type="submit">Envoyer</button>
        
            <div>
                {
                    errorForm
                }
            </div>
        </form>
    )
}

export default Signin