
import {Admin, Resource} from 'react-admin'
import {FirebaseAuthProvider,FirebaseDataProvider,FirebaseRealTimeSaga} from 'react-admin-firebase';
import {CareerList,CareerEdit,CareerCreate} from './Fields/Careers'

import {PostList} from './Posts/PostList'
import {PostCreate} from './Posts/PostCreate'
import {PostEdit} from './Posts/PostEdit'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjGyaNmnnEh2SUn92WWfa6QvXbi10R0Ag",
  authDomain: "campus-2cc6f.firebaseapp.com",
  projectId: "campus-2cc6f",
  storageBucket: "campus-2cc6f.appspot.com",
  messagingSenderId: "75151118571",
  appId: "1:75151118571:web:8dcda8e0b3a632cabb6eae",
  measurementId: "G-4CFS4F4BNL"
};

const dataProvider = FirebaseDataProvider(firebaseConfig);//
const authProvider = FirebaseAuthProvider(firebaseConfig);

function App() {
  return (
   <Admin 
      // dashboard={Dashboard} 
      dataProvider={dataProvider} 
      authProvider={authProvider}
      // customSagas={[firebaseRealtime]}
      >
        <Resource name="university" list={PostList} create={PostCreate} edit={PostEdit}/>
        <Resource name="scholarship" list={PostList} create={PostCreate} edit={PostEdit}/>
        <Resource name="job" list={PostList} create={PostCreate} edit={PostEdit}/>
        <Resource name="career" list={CareerList} create={CareerCreate} edit={CareerEdit}/>
        <Resource name="student_life" list={PostList} create={PostCreate} edit={PostEdit}/>
        <Resource name="study_abroad" list={PostList} create={PostCreate} edit={PostEdit}/>
        <Resource name="videos" list={PostList} create={PostCreate} edit={PostEdit}/>
        <Resource name="divers" list={PostList} create={PostCreate} edit={PostEdit}/>
      </Admin>
  );
}

export default App;
