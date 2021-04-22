import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,RichTextField,SimpleFormIterator,
    TextInput,ImageInput,ImageField,AutocompleteArrayInput,AutocompleteInput, 
    List,Datagrid,TextField,Edit,ArrayInput,
    EditButton,DateField,required,minLength,
} from 'react-admin';

import useStyles from '../useStyles' 



 var validateText = [required(),minLength(3)]
 var validateRich = [required(),minLength(20)]


 const timestamp = Date.now().toString()
 

  export function CareerCreate(props){
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
         label="Name of the career"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
        <RichTextInput source="advantage_english" validate={validateRich}   label="" 
         helperText="Enter the advantage" validate={validateRich} />
        <RichTextInput source="desadvantage_english" validate={validateRich}   label="" 
         helperText="Enter the desadvantages" validate={validateRich} />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de la bourse"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
        <RichTextInput source="advantage_french" validate={validateRich}   label="" 
         helperText="Entrez les avantages" validate={validateRich} />
        <RichTextInput source="desadvantage_french" validate={validateRich}   label="" 
         helperText="Entrez les desadvantages" validate={validateRich} />
         <div className={classes.space}> </div>
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

export function CareerEdit(props){
    const classes = useStyles();  
    return(
    <Edit {...props} className={classes.editForm} title={<PostTitle/>}>
      <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
      <div className={classes.div} >English Inputs</div>
         <TextInput source="name_english" validate={validateText} className={classes.textInput} 
         label="Name of the career"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_english" validate={validateRich}   label="" 
         helperText="Enter the description" />
        <RichTextInput source="advantage_english" validate={validateRich}   label="" 
         helperText="Enter the advantage" validate={validateRich} />
        <RichTextInput source="desadvantage_english" validate={validateRich}   label="" 
         helperText="Enter the desadvantages" validate={validateRich} />
        <div className={classes.space}> </div>

         <div className={classes.div}>French Inputs</div>
         <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de la bourse"  variant="outlined" InputLabelProps={{shrink: true,}}/>
        <RichTextInput source="description_french" validate={validateRich}   label="" 
         helperText="Entrez la description" />
        <RichTextInput source="advantage_french" validate={validateRich}   label="" 
         helperText="Entrez les avantages" validate={validateRich} />
        <RichTextInput source="desadvantage_french" validate={validateRich}   label="" 
         helperText="Entrez les desadvantages" validate={validateRich} />
         <div className={classes.space}> </div>
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

export const CareerList = props => {
  
    const classes = useStyles();
    return (
        <List {...props} className={classes.listForm}>
                <Datagrid className={classes.dataGrid} rowStyle={postRowStyle}>
                    <TextField source="id" />
                    <TextField source="name_english"/>
                    <RichTextField source="description_english"/>
                    <DateField source="lastupdate"/>
                    <EditButton className={classes.editButton}/>
                </Datagrid>  
        </List>
    );
}