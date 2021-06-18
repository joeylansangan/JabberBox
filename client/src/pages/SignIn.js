import React from 'react';
import './styles/SignIn.css';

import firebase from '../components/Firebase'


const auth = firebase.auth();

function SignIn(){
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return(
        <div className="wrapper flexCenter">
            {/* <div className="svgCard" className="halfCard">
                <img src="./assets/images/iso1.svg" alt="iso_svg"/> 
            </div> */}
            <div id="signInCard" >
                <img id="logo-name"src="./assets/images/logoname.svg" alt="jabberbox"/>

                <div>
                    <h4>Welcome!</h4>
                    <h3>Come in and join a room</h3>
                </div>

                <div className="signInCard">
                    <input placeholder="email or phone number"></input>
                    <input placeholder="password"></input>
                    <button id="signInBtn">Log In</button>
                    <span id="or">OR</span>
                    <button onClick={signInWithGoogle} id="googleSign" className="flexCenter"><img id="googleSignSvg" src="./assets/images/icons/search.svg" alt="google auth"/>Sign In with Google</button>
                    <span id="forgot" className="flexCenter">Forgot Password?</span>
                    <span id="noAccount">Don't have an account? <a href="https://www.youtube.com/watch?v=zQyrwxMPm88&t=184s" id="register">Register</a></span>
                </div>

            </div>


        </div>
    )
}

export default SignIn;