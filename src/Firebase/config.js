import firebase from "firebase";
import {FirebaseAuthProvider,FirebaseDataProvider} from 'react-admin-firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAjGyaNmnnEh2SUn92WWfa6QvXbi10R0Ag",
    authDomain: "campus-2cc6f.firebaseapp.com",
    projectId: "campus-2cc6f",
    storageBucket: "campus-2cc6f.appspot.com",
    messagingSenderId: "75151118571",
    appId: "1:75151118571:web:8dcda8e0b3a632cabb6eae",
    measurementId: "G-4CFS4F4BNL"
  };

  const App = firebase.initializeApp(firebaseConfig);
  
  const options = {
  
    // rootRef: 'root-collection/some-doc' | () => 'root-collection/some-doc',
    // Your own, previously initialized firebase app instance
    app: App,
    logging: true,
    persistence: 'session',
    dontAddIdFieldToDoc: false,
    softDelete: false,
    associateUsersById: false,
    metaFieldCasing: 'lower',
    relativeFilePaths: false, 
    useFileNamesInStorage: false, 
    lazyLoading: {
      enabled: false
    },
    firestoreCostsLogger: {
      enabled: false,
    }
  }



const dataProvider = FirebaseDataProvider(App, options);//
const authProvider = FirebaseAuthProvider(App, options);


export  {dataProvider,authProvider};