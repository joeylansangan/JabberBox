import React, {useState, useRef} from 'react';
import './styles/ChatRoom.css';

import firebase from '../components/Firebase';
import 'firebase/firestore';

// import SignOut from '../components/SignOut';
import {useCollectionData} from 'react-firebase-hooks/firestore';

// import avatar1 from './avatars/main.png';
// import avatar2 from './avatars/fade.png';
// import avatar3 from './avatars/sunglasses.png';
// import avatar4 from './avatars/redhair.png';
// import avatar5 from './avatars/blackhair.png';

const firestore = firebase.firestore();
const auth = firebase.auth();

function ChatRoom(){

    const dummy = useRef();

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
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }


    return(
        <div className="chatWrapper">
            <div id="chatNav">
                <div>
                <img className="chatIcon" src="./assets/images/icons/jabberBoxLogo.svg" alt="user_icon"/>
                </div>
                
                <div>
                    <img className="chatIcon" src="./assets/images/icons/user.svg" alt="user_icon"/>
                    <img onClick={() => auth.signOut()} className="chatIcon" src="./assets/images/icons/close.svg" alt="close_icon"/>
                </div>
                
                
            </div>
            <div id="chatBox">
                <div className="flexCol scroll">
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
                    <div ref={dummy}></div>
                </div>
            <form className="flex" onSubmit={sendMessage}>
                <input id="chatInput" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
                <button id="chatSend" type="submit">Send</button>
            </form>
            </div>
                      {/* <SignOut /> */}
        </div>
    )
}

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;
    
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

 
    return (
        <div className={`message ${messageClass}`}>
            <img id="chatAvatar" src={photoURL} alt="user"/>
            {/* <img id="chatAvatar" src={avatar2} alt="user"/> */}
            <p className="flexCenter">{text}</p>
        </div>
        
    )
   
}

export default ChatRoom;