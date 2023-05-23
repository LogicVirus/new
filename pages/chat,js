import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from '../components/SignIn';
import ChatRoom from '../components/ChatRoom';

function ChatPage() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <ChatRoom /> : <SignIn />}
    </div>
  )
}

export default ChatPage;
