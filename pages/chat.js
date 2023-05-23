import { auth, db } from "../firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from 'firebase/auth';

function Chat() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });

    return unsubscriber;
  }, [router]);

  useEffect(() => {
    const messagesQuery = query(collection(db, "messages"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(messagesQuery, snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });

    return unsubscribe;
  }, [db]);

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        timestamp: serverTimestamp(),
        uid: user.uid,
      });

      setNewMessage("");
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = () => {
    signOut(auth).then(() => {
      router.push("/");
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Chat;
