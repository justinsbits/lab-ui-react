import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class AuthenticationService {
  static async signIn(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        alert(`User: ${userCredential.user} logged in!`);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(`Error Code/Message: ${error.code}/${error.message}`);
      });
  }
}
