import * as React from "react";
import RichTextInput from 'ra-input-rich-text';
import {withStyles} from '@material-ui/core/styles';
import {
    Create,SimpleForm,ChipField,AutocompleteInput,
    ReferenceInput,SelectInput,BooleanInput,ReferenceArrayInput,
    TextInput,Filter,ImageInput,ImageField, SelectArrayInput,
    NumberInput,List,Datagrid,TextField,SimpleList,Edit,
    EditButton,ReferenceField,DateField, DateInput,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import useStyles from '../useStyles' 
import {countries, level, year} from '../constants'
import  firebase from 'firebase';
import { TrendingUpRounded } from "@material-ui/icons";


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

  export function CareerCreate(props){
    const classes = useStyles();
    const configureQuill = quill => quill.getModule('toolbar').addHandler('bold', function (value) {
      this.quill.format('bold', value)
  });
  var firestore = firebase.firestore()
  const transform = data => ({
    ...data,
    id: firebase.fieldValue.serverTimestamp()
}); 

   return(
    <Create {...props} className={classes.create} transform={transform}>
    <SimpleForm className={classes.form} redirect="list">
         
         <TextInput source="title" className={classes.textInput} label="Titre" helperText="Entrez le titre" fullwidth variant="outlined" InputLabelProps={{
            shrink: true,
          }}/>
         <TextInput source="name" className={classes.textInput} label="" helperText="Entrez le nom de la bourse" variant="outlined"/>
         <TextInput source="duration" className={classes.textInput} label="" helperText="Entrez la durée de la bourse" variant="outlined"/>
         <TextInput source="amount" className={classes.textInput} label="" helperText="Entrez le montant" variant="outlined"/>
         
         <SelectArrayInput source="country" className={classes.selectInput} choices={countries.fr} helperText="Choisir le pays donneur" fullwidth variant="outlined"/>
         <SelectInput source="level" className={classes.selectInput} choices={level.fr} helperText="Choisir le niveau" fullwidth variant="outlined"/>
         <SelectInput source="year" className={classes.selectInput} choices={year} helperText="Chosir l'année" fullwidth variant="outlined"/>
         <SelectArrayInput source="eligible"  choices={countries.fr} className={classes.selectInput}  helperText="Choisir les pays eligibles" variant="outlined"/>
         

         <RichTextInput source="description" className={classes.richText} label="" 
         helperText="Enter the description" configureQuill={configureQuill}/>

        <RichTextInput source="advantage" className={classes.form} label="" 
         helperText="Enter the advantage" configureQuill={configureQuill}/>

        <RichTextInput source="condition" className={classes.form} label="" 
         helperText="Enter the conditions" configureQuill={configureQuill}/>

        <RichTextInput source="req_doc" className={classes.form} label=""
         helperText="Enter the documents" configureQuill={configureQuill}/>

        <RichTextInput source="how_apply" className={classes.form} label="" 
         helperText="Explain how to apply" configureQuill={configureQuill}/>

        <RichTextInput source="other_detail" className={classes.form} label="" 
         helperText="Enter other details" configureQuill={configureQuill}/>

        <DateInput source="deadline" className={classes.form} helperText="Deadline" label=""/>

         <BooleanInput defaultValue = {false} source="isTopScholar"  
         label="is it a top scholarship?" className={classes.formField}/>
    
         <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
         helperText="Selectionnez une image illustrative" className={classes.image}>
             <ImageField source="src"  className={classes.selectedImg}/>
         </ImageInput>
     </SimpleForm>
 </Create>
   )
}

export function CareerEdit(props){
    const classes = useStyles();  
    return(
        <Edit {...props} >
        <SimpleForm>
                <ReferenceInput source="title" reference="posts" 
                    label="Modifier le titre" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <TextInput optionText="title"/> 
                    </ReferenceInput>

                    <ReferenceInput source="subtitle" reference="posts" 
                    label="Modifier le sous titre" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <TextInput optionText="subtitle"/> 
                    </ReferenceInput>

                    <ReferenceInput source="authorId" reference="authors" 
                    label="Changer l'auteur" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <SelectInput optionText="name" /> 
                    </ReferenceInput>

                    <ReferenceInput source="category" reference="categories" 
                    label="Changer la category" className={classes.formField}
                    filterToQuery = {searchText => ({ title: searchText })}>
                        <SelectInput optionText="name" /> 
                    </ReferenceInput>

                    <BooleanInput source="isYearArticle"  label="Est-ce l'article de l'année?" 
                    className={classes.formField}/>

                    <ReferenceInput source="articlebody" reference="authors" 
                    label="Decrivez l'article" className={classes.formField}>
                         <RichTextInput />
                    </ReferenceInput>

                   

                    <ImageInput source="src" accept="image/*.jpg,.jpeg,.gif,.png" label="" 
                    placeholder="Selectionnez une image de l'auteur" className={classes.image}>
                        <ImageField source="src"  className={classes.selectedImg}/>
                    </ImageInput>
        </SimpleForm>
    </Edit>
    )
}

export const CareerList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => record.author}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) :
            (
                <Datagrid>
                    <TextField source="title" />
                    <ReferenceField source="authorId" reference="authors">
                        <TextField source="name" /> 
                    </ReferenceField>
                    <TextField source="category" />
                    <DateField source="createdate" showTime={false}/>
                    <EditButton/>
                </Datagrid>
             )
            }   
        </List>
    );
}