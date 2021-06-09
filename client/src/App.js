import React from 'react';
import './App.css';

import firebase from './components/Firebase';
import 'firebase/firestore';
import 'firebase/auth';

//pages
import SignIn from './pages/SignIn';
import ChatRoom from './pages/ChatRoom';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
