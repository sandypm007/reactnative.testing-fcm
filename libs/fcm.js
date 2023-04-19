import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = require('../firebaseWebConfig.json');

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

messaging().requestPermission();

messaging()
  .getToken()
  .then(token => {
    console.log(token);
  });
