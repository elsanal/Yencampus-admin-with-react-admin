import * as React from "react";
import {
    Create,SimpleForm,SimpleFormIterator,
    TextInput,ImageInput,ImageField,UrlField, 
    List,Datagrid,TextField,Edit,ArrayInput,
    EditButton,DateField,required,minLength,
} from 'react-admin';

import useStyles from '../useStyles' 

 var validateText = [required(),minLength(3)]
 const timestamp = Date.now().toString()
 
  export function ImagesCreate(props){
    const classes = useStyles();
  console.log(timestamp)
  const transform = data => ({
    ...data,
    id: timestamp
}); 
   return(
    <Create {...props} className={classes.create} transform={transform}>
    <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
             <ImageInput source="src" accept="image/*.jpg,.jpeg,.png,.jpg" label="" 
              helperText="Select an image" validate={required()} className={classes.imageInput}>
                  <ImageField source="src"  />
              </ImageInput>
              <TextInput source="name_english" validate={validateText} className={classes.textInput} 
         label="Name of the image"  variant="outlined" InputLabelProps={{shrink: true,}}/>
              <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de l'image"  variant="outlined" InputLabelProps={{shrink: true,}}/>
              <TextInput source="url"  initialValue="Null" className={classes.textInput} 
         label="Enter the url"  variant="outlined" InputLabelProps={{shrink: true,}}/>
     </SimpleForm>
 </Create>
   )
}

const PostTitle = ({ record }) => {

  return <span>Images</span>;
};

export function ImagesEdit(props){
    const classes = useStyles();  
    return(
    <Edit {...props} className={classes.editForm} title={<PostTitle/>}>
      <SimpleForm className={classes.simpleForm} redirect="list" warnWhenUnsavedChanges>
              <ImageInput source="src" accept="image/*.jpg,.jpeg,.png,.jpg" label="" 
              helperText="Select an image" validate={required()} className={classes.imageInput}>
                  <ImageField source="src"  />
              </ImageInput>
              <TextInput source="name_english" validate={validateText} className={classes.textInput} 
         label="Name of the image"  variant="outlined" InputLabelProps={{shrink: true,}}/>
              <TextInput source="name_french" validate={validateText} className={classes.textInput} 
         label="Nom de l'image"  variant="outlined" InputLabelProps={{shrink: true,}}/>
              <TextInput source="url"  initialValue="Null" className={classes.textInput} 
         label="Enter the url"  variant="outlined" InputLabelProps={{shrink: true,}}/>
     </SimpleForm>
    </Edit>
    )
}

const date = new Date().toISOString().substr(0, 10)

const postRowStyle = (record) => ({
  backgroundColor: record.lastupdate > record.createdate ? 'grey' : 'grey',
  color:'black',
  fontWeight:'bold',
});

export const ImagesList = props => {
  
    const classes = useStyles();
    return (
        <List {...props} className={classes.listForm}>
                <Datagrid className={classes.dataGrid} rowStyle={postRowStyle}>
                    <TextField source="id"/>
                    <TextField source="name_english"/>
                    <UrlField source="url"/>
                    <ImageField source="src.src"/>
                    <DateField source="lastupdate"/>
                    <EditButton className={classes.editButton}/>
                </Datagrid>  
        </List>
    );
}