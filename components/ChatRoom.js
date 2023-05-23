import React, { useRef, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { addDoc, collection, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(db, 'messages');
  const queryRef = query(messagesRef, orderBy('createdAt'));
  const [messages] = useCollectionData(queryRef, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <button onClick={() => signOut(auth)}>Sign Out</button>

      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type your message" />

        <button type="submit" disabled={!formValue}>Send</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://via.placeholder.com/150'} alt="Avatar" />
      <p>{text}</p>
    </div>
  )
}

export default ChatRoom;
