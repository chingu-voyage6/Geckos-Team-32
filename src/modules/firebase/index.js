import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
import { createUploader } from "./api";

export let firebaseApp = firebase.initializeApp(firebaseConfig);
export let fireDb = firebaseApp.firestore();
export const imageUploader = createUploader(firebase);

fireDb.settings({ timestampsInSnapshots: true });
