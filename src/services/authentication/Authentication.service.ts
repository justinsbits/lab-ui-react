import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default class Authentication {
  static async Register(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });

    // try {
    //   const profile = await ProfileDAO.getByEmail(admin, anEmail);
    //   if (profile !== null && profile.length > 0) {
    //     const error = Error.NewError(
    //       Constants.Error.PROFILE_ALREADY_EXISTS,
    //       "500"
    //     );
    //     return error;
    //   }
    //   const response = await ProfileDAO.add(admin, aProfile);
    //   return response;
    // } catch (exception) {
    //   const error = Error.NewError(Constants.Error.UNKNOWN_SERVER_ERROR, "500");
    //   return error;
    // }
  }

  static async signIn() {}

  static async getProfile() {}
}
