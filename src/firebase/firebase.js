import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAQn2cy0AGcRoAR68EwO8OD3FLQrCf1ALc',
  databaseURL: 'https://infinitok-8202b.firebaseio.com/',
  projectId: 'infinitok-8202b',
  appId: '1:329596131489:android:d1c62a08ed4b46703e38e0',
};

export default Firebase.initializeApp(firebaseConfig);
