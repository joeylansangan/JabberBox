import React from 'react';
import './styles/SignIn.css';

function SignIn(){
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
                    <span id="googleSign" className="flexCenter"><img id="googleSignSvg" src="./assets/images/icons/search.svg" />Sign In with Google</span>
                    <span id="forgot" className="flexCenter">Forgot Password?</span>
                    <span id="noAccount">Don't have an account? <a id="register">Register</a></span>
                </div>

            </div>


        </div>
    )
}

export default SignIn;