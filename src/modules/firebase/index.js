import firebase from 'firebase';
import { firebaseConfig} from './firebaseConfig';

export let firebaseApp = firebase.initializeApp(firebaseConfig);
export let fireDb = firebaseApp.firestore();

fireDb.settings({ timestampsInSnapshots: true });