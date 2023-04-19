import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = require('../firebaseWebConfig.json');

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

messaging().requestPermission();

const registerAppWithFCM = async () => {
  console.log('Requesting FCM access to receive push notifications');
  await messaging().registerDeviceForRemoteMessages();
  console.log('App registered with FCM for push notifications');
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('FCM notification opened:', remoteMessage);
  });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('FCM background message:', remoteMessage);
  });

  messaging().onMessage(async remoteMessage => {
    console.log('FCM foreground message:', remoteMessage);
  });

  const token = await messaging().getToken();
  console.log(token);
};

registerAppWithFCM();
