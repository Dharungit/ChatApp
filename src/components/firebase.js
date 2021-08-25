import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCA38xo-96Sy6AmqDnt59aRlk_FU2-pIGk",
    authDomain: "textzz-4d4ac.firebaseapp.com",
    projectId: "textzz-4d4ac",
    storageBucket: "textzz-4d4ac.appspot.com",
    messagingSenderId: "85556085752",
    appId: "1:85556085752:web:3cb3aced04fb215c2f4c0d"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      alert("signup");
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    auth.signOut();
  };

  export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
  };