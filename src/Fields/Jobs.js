import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,AutocompleteInput,AutocompleteArrayInput,
    SimpleFormIterator,SelectArrayInput,
    SelectInput,ArrayInput,BooleanInput,
    TextInput,ImageInput,ImageField,NumberField,
    List,Datagrid,TextField,Edit,
    EditButton,DateField, DateInput,required,minLength,
    
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import useStyles from '../useStyles' 
import {countries, contrat,level,lang,category} from '../constants'
import  firebase from 'firebase';
import { TrendingUpRounded } from "@material-ui/icons";


 var validateText = []
 var validateRich = [required(),minLength(20)]


 const timestamp = Date.now().toString()
 

  export function JobCreate(props){
    const classes = useStyles();

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
        <SelectArrayInput source="category_english"  className={classes.selectInput} choices={category.en} 
         label="Category" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="contrat_type_english"  className={classes.selectInput} choices={contrat.en} 
         label="Type of contrat" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="level_english"  className={classes.selectInput} choices={level.en} 
         label="Level" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="language_english"  className={classes.selectInput} choices={lang.en} 
         label="Language" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="summary_english" validate={validateRich}   label="" 
         helperText="Enter the enterprise summary" />
         <RichTextInput source="responsibility_english" validate={validateRich}   label="" 
         helperText="Descrbe the responsibility" />
        <RichTextInput source="requirement_english" validate={validateRich}   label="" 
         helperText="Enter the requirement" validate={validateRich} />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom du travail"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays donneur" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="category_french"  className={classes.selectInput} choices={category.fr} 
         label="Category" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="contrat_type_french"  className={classes.selectInput} choices={contrat.fr} 
         label="Type of contrat" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="level_french"  className={classes.selectInput} choices={level.fr} 
         label="Level" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="language_french"  className={classes.selectInput} choices={lang.fr} 
         label="Language" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="summary_french" validate={validateRich}   label="" 
         helperText="Entrez le resumé de l'entreprise" />
         <RichTextInput source="responsibility_french" validate={validateRich}   label="" 
         helperText="Descrivez la responsabilité" />
        <RichTextInput source="requirement_french" validate={validateRich}   label="" 
         helperText="Entrez les exigence" validate={validateRich} />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <TextInput source="enterprise" validate={validateText} className={classes.textInput} 
         label="Name of the Enterprise"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="city" validate={validateText} className={classes.textInput} 
         label="City"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="email" validate={validateText} className={classes.textInput} 
         label="Email"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="tel" validate={validateText} className={classes.textInput} 
         label="Telephone"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="duration" validate={validateText} className={classes.textInput} 
         label="Enter the duration"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="experience" validate={validateText} className={classes.textInput} 
         label="Experience"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="nb_poste" validate={validateText} className={classes.textInput} 
         label="Number of poste"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="salary" validate={validateText} className={classes.textInput} 
         label="Enter the salary"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="official_web" validate={validateText} className={classes.textInput} 
         label="Official Website"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <TextInput source="apply_link" validate={validateText} className={classes.textInput} 
         label="Application link"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <BooleanInput defaultValue = {false} source="isOpen"  
         label="is open to application?" className={classes.boolanInput}/>
        <DateInput source="deadline" validate={required()} className={classes.dateInput} helperText="Deadline" label=""/>
        <ArrayInput source="images">
           <SimpleFormIterator>
                <ImageInput source="src" accept="image/*.jpg,.jpeg,.png,.jpg" label="" 
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
        <SelectArrayInput source="category_english"  className={classes.selectInput} choices={category.en} 
         label="Category" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="contrat_type_english"  className={classes.selectInput} choices={contrat.en} 
         label="Type of contrat" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="level_english"  className={classes.selectInput} choices={level.en} 
         label="Level" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="language"  className={classes.selectInput} choices={lang.en} 
         label="Language" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="summary_english" validate={validateRich}   label="" 
         helperText="Enter the enterprise summary" />
         <RichTextInput source="responsibility_english" validate={validateRich}   label="" 
         helperText="Descrbe the responsibility" />
        <RichTextInput source="requirement_english" validate={validateRich}   label="" 
         helperText="Enter the requirement" validate={validateRich} />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom du travail"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <AutocompleteInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays donneur" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="category_french"  className={classes.selectInput} choices={category.fr} 
         label="Category" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="contrat_type_french"  className={classes.selectInput} choices={contrat.fr} 
         label="Type of contrat" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="level_french"  className={classes.selectInput} choices={level.fr} 
         label="Level" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <SelectArrayInput source="language"  className={classes.selectInput} choices={lang.fr} 
         label="Language" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="summary_french" validate={validateRich}   label="" 
         helperText="Entrez le resumé de l'entreprise" />
         <RichTextInput source="responsibility_french" validate={validateRich}   label="" 
         helperText="Descrivez la responsabilité" />
        <RichTextInput source="requirement_french" validate={validateRich}   label="" 
         helperText="Entrez les exigence" validate={validateRich} />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <TextInput source="enterprise" validate={validateText} className={classes.textInput} 
         label="Name of the Enterprise"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="city" validate={validateText} className={classes.textInput} 
         label="City"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="email" validate={validateText} className={classes.textInput} 
         label="Email"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="tel" validate={validateText} className={classes.textInput} 
         label="Telephone"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="duration" validate={validateText} className={classes.textInput} 
         label="Enter the duration"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="experience" validate={validateText} className={classes.textInput} 
         label="Experience"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="nb_poste" validate={validateText} className={classes.textInput} 
         label="Number of poste"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="salary" validate={validateText} className={classes.textInput} 
         label="Enter the salary"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="official_web" validate={validateText} className={classes.textInput} 
         label="Official Website"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <TextInput source="apply_link" validate={validateText} className={classes.textInput} 
         label="Application link"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <BooleanInput defaultValue = {false} source="isOpen"  
         label="is open to application?" className={classes.boolanInput}/>
        <DateInput source="deadline" validate={required()} className={classes.dateInput} helperText="Deadline" label=""/>
        <ArrayInput source="images">
           <SimpleFormIterator>
                <ImageInput source="src" accept="image/*.jpg,.jpeg,.png,.jpg" label="" 
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
                    <TextField source="enterprise"/>
                    <TextField source="name_english"/>
                    <TextField source="country_english" placeholder="No defined"/>
                    <NumberField source="salary"/>
                    <TextField source="contrat_type_english"/>
                    <DateField source="deadline"/>
                    <EditButton className={classes.editButton}/>
                </Datagrid>  
        </List>
    );
}