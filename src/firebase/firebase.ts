import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { firebaseConfig as config } from "./firebase-config";

export class Firebase {
  static app: any;
  static db: any;

  static Init() {
    Firebase.app = initializeApp(config);
    Firebase.db = getFirestore(Firebase.app);
  }
}
