import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,ArrayInput,SimpleFormIterator,
    SelectInput,BooleanInput,AutocompleteArrayInput,AutocompleteInput,
    TextInput,ImageInput,ImageField, SelectArrayInput,NumberField,
    NumberInput,List,Datagrid,TextField,Edit,
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
 

  export function UniversityCreate(props){
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
         label="Name of the university"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="University country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
          <ArrayInput source="depart_english" label="Name of departements">
          <SimpleFormIterator>
            <TextInput source="depart_name_english" validate={validateText} className={classes.textInput} 
            label="Name of departement"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
            <ArrayInput source="major_english">
              <SimpleFormIterator>
                <TextInput source="major_name_english" validate={validateText} className={classes.textInput} 
                label="Name of major"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
            </ArrayInput> 
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="top_major_english" label="Name of top majors">
              <SimpleFormIterator>
                <TextInput source="major_name_english" validate={validateText} className={classes.textInput} 
                label="Name of major"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
        </ArrayInput> 
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de l'university"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays de l'university" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/> 
         <ArrayInput source="depart_french" label="Nom du departement">
          <SimpleFormIterator>
            <TextInput source="depart_name_french" validate={validateText} className={classes.textInput} 
            label="Nom des departements"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
            <ArrayInput source="major_french" >
              <SimpleFormIterator>
                <TextInput source="major_name_french" validate={validateText} className={classes.textInput} 
                label="Nom de la filiere"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
            </ArrayInput> 
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="top_major_french" label="Nom des top filieres">
              <SimpleFormIterator>
                <TextInput source="major_name_french" validate={validateText} className={classes.textInput} 
                label="No de la filiere"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
            </ArrayInput> 
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <TextInput source="school_fee" validate={validateText} className={classes.textInput} 
         label="Frais de scolarité"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="official_web" validate={validateText} className={classes.textInput} 
         label="Official Website"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <TextInput source="apply_link" validate={validateText} className={classes.textInput} 
         label="Application link"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <DateInput source="deadline" validate={required()} className={classes.dateInput} helperText="Deadline" label=""/>
         <BooleanInput defaultValue = {false} source="isTopUniversity"  
         label="is it a top university?" className={classes.boolanInput}/>
          <NumberInput source="worl_ranking" validate={validateText} className={classes.textInput} 
         label="Worl ranking"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <NumberInput source="national_ranking" validate={validateText} className={classes.textInput} 
         label="National ranking"  variant="outlined" InputLabelProps={{shrink: true,}}/>
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

export function UniversityEdit(props){
    const classes = useStyles();  
    return(
    <Edit {...props} className={classes.editForm} title={<PostTitle/>}>
      <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
      <div className={classes.div} >English Inputs</div>
         <TextInput source="name_english" validate={validateText} className={classes.textInput} 
         label="Name of the university"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="University country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <ArrayInput source="depart_english" label="Name of departements">
          <SimpleFormIterator>
            <TextInput source="depart_name_english" validate={validateText} className={classes.textInput} 
            label="Name of departements"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
            <ArrayInput source="major_english" >
              <SimpleFormIterator>
                <TextInput source="major_name_english" validate={validateText} className={classes.textInput} 
                label="Name of major"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
            </ArrayInput> 
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="top_major_english" label="Name of top majors">
              <SimpleFormIterator>
                <TextInput source="major_name_english" validate={validateText} className={classes.textInput} 
                label="Name of major"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
            </ArrayInput> 
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de l'university"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays de l'university" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <ArrayInput source="depart_french" label="Nom des departements">
          <SimpleFormIterator>
            <TextInput source="depart_name_french" validate={validateText} className={classes.textInput} 
            label="Nom du departement"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
            <ArrayInput source="major_french">
              <SimpleFormIterator>
                <TextInput source="major_name_french" validate={validateText} className={classes.textInput} 
                label="Nom de la filiere"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
            </ArrayInput> 
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="top_major_french" label="Nom des top filieres">
              <SimpleFormIterator>
                <TextInput source="major_name_french" validate={validateText} className={classes.textInput} 
                label="Nom de la filiere"  variant="outlined" InputLabelProps={{shrink: true,}}/>    
              </SimpleFormIterator>
            </ArrayInput> 
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <TextInput source="school_fee" validate={validateText} className={classes.textInput} 
         label="Frais de scolarité"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="official_web" validate={validateText} className={classes.textInput} 
         label="Official Website"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <TextInput source="apply_link" validate={validateText} className={classes.textInput} 
         label="Application link"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <DateInput source="deadline" validate={required()} className={classes.dateInput} helperText="Deadline" label=""/>
         <BooleanInput defaultValue = {false} source="isTopUniversity"  
         label="is it a top university?" className={classes.boolanInput}/>
          <NumberInput source="world_ranking" validate={validateText} className={classes.textInput} 
         label="World ranking"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <NumberInput source="national_ranking" validate={validateText} className={classes.textInput} 
         label="National ranking"  variant="outlined" InputLabelProps={{shrink: true,}}/>
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

export const UniversityList = props => {
  
    const classes = useStyles();
    return (
        <List {...props} className={classes.listForm}>
                <Datagrid className={classes.dataGrid} rowStyle={postRowStyle}>
                    <TextField source="id" />
                    <TextField source="name_english"/>
                    <TextField source="country_english" placeholder="No defined"/>
                    <NumberField source="national_ranking"/>
                    <NumberField source="world_ranking"/>
                    <TextField source="school_fee"/>
                    <DateField source="deadline"/>
                    <EditButton className={classes.editButton}/>
                </Datagrid>  
        </List>
    );
}