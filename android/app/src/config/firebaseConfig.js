// import { initializeApp } from '@react-native-firebase/app';
// import { getDatabase } from '@react-native-firebase/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBD_aFVt2kRInyqoRxm5UjGciFC_kRcsfI',
//   authDomain: 'storyapp.firebaseapp.com', // Generally inferred
//   databaseURL: 'https://storyapp-89d90-default-rtdb.firebaseio.com',
//   projectId: 'storyapp-89d90',
//   storageBucket: 'storyapp-89d90.appspot.com',
//   messagingSenderId: '55108223485',
//   appId: '1:55108223485:android:14d6e41aecfaf49aabd994', // Ensure this matches your setup
//   measurementId: 'YOUR_MEASUREMENT_ID', // If available, otherwise it can be omitted
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get a reference to the database
// const database = getDatabase(app);

// export default database;

import { initializeApp, getApps } from '@react-native-firebase/app';
import { getDatabase } from '@react-native-firebase/database';

let app;
if (!getApps().length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBD_aFVt2kRInyqoRxm5UjGciFC_kRcsfI',
    authDomain: 'storyapp.firebaseapp.com',
    databaseURL: 'https://storyapp-89d90-default-rtdb.firebaseio.com',
    projectId: 'storyapp-89d90',
    storageBucket: 'storyapp-89d90.appspot.com',
    messagingSenderId: '55108223485',
    appId: '1:55108223485:android:14d6e41aecfaf49aabd994',
    measurementId: 'YOUR_MEASUREMENT_ID',
  };

  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; 
}

const database = getDatabase(app);

export default database;

