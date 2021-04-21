import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,ChipField,AutocompleteInput,UrlField,SimpleFormIterator,
    ReferenceInput,SelectInput,BooleanInput,ReferenceArrayInput,ArrayInput,
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
         <SelectInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="Provider country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" configureQuill={configureQuill}/>
        <RichTextInput source="requirement_english" validate={validateRich}   label="" 
         helperText="Enter the requirement" validate={validateRich} configureQuill={configureQuill}/>
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom du travail"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <SelectInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays donneur" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" configureQuill={configureQuill}/>
        <RichTextInput source="requirement_french" validate={validateRich}   label="" 
         helperText="Entrez les exigence" validate={validateRich} configureQuill={configureQuill}/>
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
         label="Name of the scholarship"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <SelectInput source="country_english"  className={classes.selectInput} choices={countries.en} 
         label="Provider country" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <SelectArrayInput source="level_english"  className={classes.selectInput} choices={level.en} 
         label="Select level" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <SelectArrayInput source="eligible_english"   choices={countries.en} className={classes.selectInput}  
         label="Eligible countries" variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
        <RichTextInput source="advantage_english" validate={validateRich}   label="" 
         helperText="Enter the advantage" validate={validateRich} />
        <RichTextInput source="condition_english" validate={validateRich}   label="" 
         helperText="Enter the conditions" validate={validateRich} />
        <RichTextInput source="requered_doc_english" validate={validateRich}   label=""
         helperText="Enter the documents" />
        <RichTextInput source="how_apply_english" validate={validateRich}   label="" 
         helperText="Explain how to apply" />
        <RichTextInput source="other_detail_english" validate={validateRich}   label="" 
         helperText="Enter other details" />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de la bourse"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <SelectInput source="country_french"  className={classes.selectInput} choices={countries.fr} 
         label="Pays donneur" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <SelectArrayInput source="level_french"  className={classes.selectInput} choices={level.fr} 
         label="Choisir le niveau" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <SelectArrayInput source="eligible_french"   choices={countries.fr} className={classes.selectInput}  
         label="Pays éligibles" variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
        <RichTextInput source="advantage_french" validate={validateRich}   label="" 
         helperText="Entrez les avantages" validate={validateRich} />
        <RichTextInput source="condition_french" validate={validateRich}   label="" 
         helperText="Entrez les conditions" validate={validateRich} />
        <RichTextInput source="requered_doc_french" validate={validateRich}   label=""
         helperText="Entrez les documents" />
        <RichTextInput source="how_apply_french" validate={validateRich}   label="" 
         helperText="Comment postuler?" />
        <RichTextInput source="other_detail_french" validate={validateRich}   label="" 
         helperText="Entrez les autres details" />
         <div className={classes.space}> </div>

         <div className={classes.div}>Common Inputs</div>
         <SelectInput source="year"  className={classes.selectInput} choices={year} 
         label="Select year" fullwidth variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="duration" validate={validateText} className={classes.textInput} 
         label="Enter the duration"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="amount" validate={validateText} className={classes.textInput} 
         label="Enter the amount"  variant="outlined" InputLabelProps={{shrink: true,}}/>
         <TextInput source="official_web" validate={validateText} className={classes.textInput} 
         label="Official Website"  variant="outlined" InputLabelProps={{shrink: true,}}/>
          <TextInput source="apply_link" validate={validateText} className={classes.textInput} 
         label="Application link"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <DateInput source="deadline" validate={required()} className={classes.dateInput} helperText="Deadline" label=""/>
         <BooleanInput defaultValue = {false} source="isTopScholar"  
         label="is it a top scholarship?" className={classes.boolanInput}/>
         <ArrayInput source="images">
           <SimpleFormIterator>
                <ImageInput source="src" accept="image/*.jpg,.jpeg,.png" label="" 
              helperText="Select an image" validate={required()} className={classes.imageInput}>
                  <ImageField source="src"  />
              </ImageInput>
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