
import {Admin, Resource} from 'react-admin'
import {FirebaseAuthProvider,FirebaseDataProvider,FirebaseRealTimeSaga} from 'react-admin-firebase';
import {CareerList,CareerEdit,CareerCreate} from './Fields/Careers'
import {JobList,JobEdit,JobCreate} from './Fields/Jobs'
import {ScholarshipList,ScholarshipEdit,ScholarshipCreate} from './Fields/Scholarships'
import {LifeList,LifeEdit,LifeCreate} from './Fields/StudentLife'
import {AbroadList,AbroadEdit,AbroadCreate} from './Fields/StudyAbroad'
import {UniversityList,UniversityEdit,UniversityCreate} from './Fields/Universities'
import {VideoList,VideoEdit,VideoCreate} from './Fields/Videos'

import { createMuiTheme } from '@material-ui/core/styles';
import Scholarship from '@material-ui/icons/EuroSymbol';
import University from '@material-ui/icons/Business';
import Career from '@material-ui/icons/BusinessCenter';
import Job from '@material-ui/icons/Work';
import Abroad from '@material-ui/icons/Flight';
import Video from '@material-ui/icons/VideoLibrary';
import Life from '@material-ui/icons/People';

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
// firebase.initializeApp(firebaseConfig);

const dataProvider = FirebaseDataProvider(firebaseConfig);//
const authProvider = FirebaseAuthProvider(firebaseConfig);

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});



function App() {
  return (
   <Admin 
      // dashboard={Dashboard} 
      theme={theme}
      title="Campus Admin"
      dataProvider={dataProvider} 
      authProvider={authProvider}
      >
        <Resource name="career" list={CareerList} create={CareerCreate} edit={CareerEdit} icon={Career}/>
        <Resource name="job" list={JobList} create={JobCreate} edit={JobEdit} icon={Job}/>
        <Resource name="scholarship" list={ScholarshipList} create={ScholarshipCreate} edit={ScholarshipEdit} icon={Scholarship}/>
        <Resource name="student_life" list={LifeList} create={LifeCreate} edit={LifeEdit} icon={Life}/>
        <Resource name="study_abroad" list={AbroadList} create={AbroadCreate} edit={AbroadEdit} icon={Abroad}/>
        <Resource name="university" list={UniversityList} create={UniversityCreate} edit={UniversityEdit} icon={University}/>
        <Resource name="videos" list={VideoList} create={VideoCreate} edit={VideoEdit} icon={Video}/>
      </Admin>
  );
}

export default App;
