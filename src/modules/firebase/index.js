import firebase from 'firebase';
import { firebaseConfig} from './firebaseConfig';

export let firebaseApp = firebase.initializeApp(firebaseConfig);
export let db = firebaseApp.database();

