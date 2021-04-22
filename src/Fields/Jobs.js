import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,AutocompleteInput,AutocompleteArrayInput,
    SimpleFormIterator,
    SelectInput,ArrayInput,
    TextInput,ImageInput,ImageField,NumberField,
    List,Datagrid,TextField,Edit,
    EditButton,DateField, DateInput,required,minLength,
    
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import useStyles from '../useStyles' 
import {countries, level, year} from '../constants'
import  firebase from 'firebase';
import { TrendingUpRounded } from "@material-ui/icons";


 var validateText = [required(),minLength(3)]
 var validateRich = [required(),minLength(20)]


 const timestamp = Date.now().toString()
 

  export function JobCreate(props){
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
         label="Name of the Job"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="Provider country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
        <RichTextInput source="requirement_english" validate={validateRich}   label="" 
         helperText="Enter the requirement" validate={validateRich} />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom du travail"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays donneur" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
        <RichTextInput source="requirement_french" validate={validateRich}   label="" 
         helperText="Entrez les exigence" validate={validateRich} />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <SelectInput source="contrat_type"  className={classes.selectInput} choices={year} 
         label="Select contrat" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="duration" validate={validateText} className={classes.textInput} 
         label="Enter the duration"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="salary" validate={validateText} className={classes.textInput} 
         label="Enter the salary"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="official_web" validate={validateText} className={classes.textInput} 
         label="Official Website"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <TextInput source="apply_link" validate={validateText} className={classes.textInput} 
         label="Application link"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <DateInput source="deadline" validate={required()} className={classes.dateInput} helperText="Deadline" label=""/>
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
 </Create>
   )
}

const PostTitle = ({ record }) => {
  console.log(record.year)
  return <span>Post {record ? `"${record.name_english}"` : ''}</span>;
};

export function JobEdit(props){
    const classes = useStyles();  
    return(
    <Edit {...props} className={classes.editForm} title={<PostTitle/>}>
      <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
      <div className={classes.div} >English Inputs</div>
         <TextInput source="name_english" validate={validateText} className={classes.textInput} 
         label="Name of the Job"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="Provider country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
        <RichTextInput source="requirement_english" validate={validateRich}   label="" 
         helperText="Enter the requirement" validate={validateRich} />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom du travail"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays donneur" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
        <RichTextInput source="requirement_french" validate={validateRich}   label="" 
         helperText="Entrez les exigence" validate={validateRich} />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <SelectInput source="contrat_type"  className={classes.selectInput} choices={year} 
         label="Select contrat" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="duration" validate={validateText} className={classes.textInput} 
         label="Enter the duration"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="salary" validate={validateText} className={classes.textInput} 
         label="Enter the salary"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="official_web" validate={validateText} className={classes.textInput} 
         label="Official Website"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <TextInput source="apply_link" validate={validateText} className={classes.textInput} 
         label="Application link"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <DateInput source="deadline" validate={required()} className={classes.dateInput} helperText="Deadline" label=""/>
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
  backgroundColor: record.deadline < date ? 'red' : 'green',
  color:'black',
  fontWeight:'bold',
});

export const JobList = props => {
  
    const classes = useStyles();
    return (
        <List {...props} className={classes.listForm}>
                <Datagrid className={classes.dataGrid} rowStyle={postRowStyle}>
                    <TextField source="id" />
                    <TextField source="name_english"/>
                    <TextField source="country_english" placeholder="No defined"/>
                    <NumberField source="salary"/>
                    <TextField source="contrat_type"/>
                    <DateField source="deadline"/>
                    <EditButton className={classes.editButton}/>
                </Datagrid>  
        </List>
    );
}