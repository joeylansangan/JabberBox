import React, {useState} from 'react';
import './styles/ChatRoom.css';

import firebase from '../components/Firebase';
import 'firebase/firestore';

import SignOut from '../components/SignOut';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import avatar1 from './avatars/main.png';
import avatar2 from './avatars/fade.png';
import avatar3 from './avatars/sunglasses.png';
import avatar4 from './avatars/redhair.png';
import avatar5 from './avatars/blackhair.png';

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom(){

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
    }


    return(
        <div className="wrapper">
            <div id="chatBox">
            {/* <h2>Chat here</h2> */}
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
            <SignOut />
        
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;
    
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

 
    return (
        <div className={`message ${messageClass}`}>
            <img id="chatAvatar" src={avatar2} alt="user"/>
            <p>{text}</p>
        </div>
        
    )
   
}

export default ChatRoom;