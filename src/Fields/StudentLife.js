import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,SimpleFormIterator,ArrayInput,
    ReferenceInput,SelectInput,BooleanInput,ReferenceArrayInput,
    TextInput,Filter,ImageInput,ImageField, SelectArrayInput,NumberField,
    NumberInput,List,Datagrid,TextField,SimpleList,Edit,BooleanField,
    EditButton,ReferenceField,DateField, DateInput,required,minLength,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import useStyles from '../useStyles' 
import {countries, level, year} from '../constants'
import  firebase from 'firebase';
import { TrendingUpRounded } from "@material-ui/icons";


 var validateText = [required(),minLength(3)]
 var validateRich = [required(),minLength(20)]


 const timestamp = Date.now().toString()
 

  export function LifeCreate(props){
    const classes = useStyles();
    const configureQuill = quill => quill.getModule('toolbar').addHandler('bold', function (value) {
      this.quill.format('bold', value)
  });
  
  console.log(timestamp)
  const transform = data => ({
    ...data,
    id: timestamp
}); 
   
   return(
    <Create {...props} className={classes.create} transform={transform}>
    <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
         <div className={classes.div} >English Inputs</div>
         <TextInput source="name_english" validate={validateText} className={classes.textInput} 
         label="Name of the scholarship"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
       
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de la bourse"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <ArrayInput source="images">
           <SimpleFormIterator>
                <ImageInput source="src" accept="image/*.jpg,.jpeg,.png" label="" 
              helperText="Select an image" validate={required()} className={classes.imageInput}>
                  <ImageField source="src"  />
              </ImageInput>
           </SimpleFormIterator>
         </ArrayInput>
         <TextInput source="video_link" validate={validateText} className={classes.textInput} 
         label="Video link"  variant="outlined" InputLabelProps={{shrink: true,}}/>

     </SimpleForm>
 </Create>
   )
}

const PostTitle = ({ record }) => {
  console.log(record.year)
  return <span>Post {record ? `"${record.name_english}"` : ''}</span>;
};

export function LifeEdit(props){
    const classes = useStyles();  
    return(
    <Edit {...props} className={classes.editForm} title={<PostTitle/>}>
      <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
      <div className={classes.div} >English Inputs</div>
         <TextInput source="name_english" validate={validateText} className={classes.textInput} 
         label="Name of the scholarship"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
       
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de la bourse"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <ArrayInput source="images">
           <SimpleFormIterator>
                <ImageInput source="src" accept="image/*.jpg,.jpeg,.png" label="" 
              helperText="Select an image" validate={required()} className={classes.imageInput}>
                  <ImageField source="src"  />
              </ImageInput>
           </SimpleFormIterator>
         </ArrayInput>
         <TextInput source="video_link" validate={validateText} className={classes.textInput} 
         label="Video link"  variant="outlined" InputLabelProps={{shrink: true,}}/>

     </SimpleForm>
    </Edit>
    )
}

const date = new Date().toISOString().substr(0, 10)

const postRowStyle = (record) => ({
  backgroundColor: record.lastupdate > record.createdate ? 'green' : 'white',
  color:'black',
  fontWeight:'bold',
});

export const LifeList = props => {
  
    const classes = useStyles();
    return (
        <List {...props} className={classes.listForm}>
                <Datagrid className={classes.dataGrid} rowStyle={postRowStyle}>
                    <TextField source="id" />
                    <TextField source="name_english"/>
                    <NumberField source="nb_view"/>
                    <TextField source="nb_comment"/>
                    <EditButton className={classes.editButton}/>
                </Datagrid>  
        </List>
    );
}