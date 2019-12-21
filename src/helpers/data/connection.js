import firebase from 'firebase/app';
import firebaseConfig from '../apiKeys.json';

export default () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseKeys);
  }
};
