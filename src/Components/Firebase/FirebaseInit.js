import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseConfig';

const initializeFirebase=()=>{
    const app = initializeApp(firebaseConfig);
}
export default initializeFirebase;