import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { auth, db } from '../firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Login() {
  const router = useRouter();

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged(user => {
      if (user) {
        router.push("/chat");
      }
    });

    return unsubscriber;
  }, [router]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/chat");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;
