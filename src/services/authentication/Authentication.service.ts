import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class AuthenticationService {
  static async signIn(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // alert(`User: ${userCredential.user.email} logged in!`);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(`Error Code/Message: ${error.code}/${error.message}`);
      });
  }

  static async signOut() {
    const auth = getAuth();
    auth
      .signOut()
      .then(() => {
        //alert(`User logged out!`);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(`Error Code/Message: ${error.code}/${error.message}`);
      });
  }
}
