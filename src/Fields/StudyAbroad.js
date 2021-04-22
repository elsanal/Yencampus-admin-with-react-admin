import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,ArrayInput,AutocompleteArrayInput,AutocompleteInput,
    ReferenceInput,SelectInput,BooleanInput,SimpleFormIterator,
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
 

  export function AbroadCreate(props){
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
         <AutocompleteInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="Destination country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="advantage_english" validate={validateRich}   label="" 
         helperText="Enter the in this country" />
        <RichTextInput source="desadvantage_english" validate={validateRich}   label="" 
         helperText="Enter the desadvantage in this country" validate={validateRich} />
        
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays de destination" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="advantage_french" validate={validateRich}   label="" 
         helperText="Entrez les avantages dans ce pays" validate={validateRich} />
        <RichTextInput source="desadvantage_french" validate={validateRich}   label="" 
         helperText="Entrez les desavantages dans ce pays" validate={validateRich} />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         
         <ArrayInput source="images">
           <SimpleFormIterator>
                <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
              helperText="Select an image" validate={required()} className={classes.imageInput}>
                  <ImageField source="src"  />
              </ImageInput>
              <TextInput source="img_title" validate={validateText} className={classes.textInput} 
              label="Enter the title of the image"  variant="outlined" InputLabelProps={{shrink: true,}}/>
           </SimpleFormIterator>
         </ArrayInput>
        
     </SimpleForm>
 </Create>
   )
}

const PostTitle = ({ record }) => {
  console.log(record.year)
  return <span>Post {record ? `"${record.name_english}"` : ''}</span>;
};

export function AbroadEdit(props){
    const classes = useStyles();  
    return(
    <Edit {...props} className={classes.editForm} title={<PostTitle/>}>
      <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
      <div className={classes.div} >English Inputs</div>
         <AutocompleteInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="Destination country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="advantage_english" validate={validateRich}   label="" 
         helperText="Enter the in this country" />
        <RichTextInput source="desadvantage_english" validate={validateRich}   label="" 
         helperText="Enter the desadvantage in this country" validate={validateRich} />
        
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays de destination" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="advantage_french" validate={validateRich}   label="" 
         helperText="Entrez les avantages dans ce pays" validate={validateRich} />
        <RichTextInput source="desadvantage_french" validate={validateRich}   label="" 
         helperText="Entrez les desavantages dans ce pays" validate={validateRich} />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <ArrayInput source="images">
           <SimpleFormIterator>
                <ImageInput source="src" accept="image/*.jpg,.jpeg,.png" label="" 
              helperText="Select an image" validate={required()} className={classes.imageInput}>
                  <ImageField source="src"  />
              </ImageInput>
              <TextInput source="img_title" validate={validateText} className={classes.textInput} 
              label="Enter the title of the image"  variant="outlined" InputLabelProps={{shrink: true,}}/>
           </SimpleFormIterator>
         </ArrayInput>
        
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

export const AbroadList = props => {
  
    const classes = useStyles();
    return (
        <List {...props} className={classes.listForm}>
                <Datagrid className={classes.dataGrid} rowStyle={postRowStyle}>
                    <TextField source="id" />
                    <TextField source="country_english" placeholder="No defined"/>
                    <DateField source="lastupdate" showTime={false}/>
                    <EditButton className={classes.editButton}/>
                </Datagrid>  
        </List>
    );
}