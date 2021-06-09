import React from 'react';
import './styles/SignIn.css';

function SignIn(){
    return(
        <div className="wrapper">
            <img id="logo-name"src="./assets/images/logoname.svg" alt="jabberbox"/>

            <div>
                <h4>Welcome!</h4>
                <h3>Come in and join a room</h3>
            </div>
        </div>
    )
}

export default SignIn;