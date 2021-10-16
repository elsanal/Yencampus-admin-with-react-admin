import {Admin, Resource} from 'react-admin'
import {dataProvider,authProvider} from './Firebase/config'
import {MyLayout} from './Layout'
import {CareerList,CareerEdit,CareerCreate} from './Fields/Careers'
import {JobList,JobEdit,JobCreate} from './Fields/Jobs'
import {ScholarshipList,ScholarshipEdit,ScholarshipCreate} from './Fields/Scholarships'
import {LifeList,LifeEdit,LifeCreate} from './Fields/StudentLife'
import {AbroadList,AbroadEdit,AbroadCreate} from './Fields/StudyAbroad'
import {UniversityList,UniversityEdit,UniversityCreate} from './Fields/Universities'
import {ImagesList,ImagesEdit,ImagesCreate} from './Fields/Images'


import { createMuiTheme } from '@material-ui/core/styles';
import Scholarship from '@material-ui/icons/EuroSymbol';
import University from '@material-ui/icons/Business';
import Career from '@material-ui/icons/BusinessCenter';
import Job from '@material-ui/icons/Work';
import Abroad from '@material-ui/icons/Flight';
import Life from '@material-ui/icons/People';
import Image from '@material-ui/icons/PhotoLibrary';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
      layout={MyLayout}
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
        <Resource name="images" list={ImagesList} create={ImagesCreate} edit={ImagesEdit} icon={Image}/>
      </Admin>
  );
}

export default App;
