import React from 'react';
import firebase from './Firebase';

const auth = firebase.auth();

function SignOut(){
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut;