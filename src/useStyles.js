import {
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
  import InputLabel from '@material-ui/core/InputLabel';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
  import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  appBar:{

  },
  drawer:{

  },
  layout:{

  },
    create:{
      paddingLeft:25,
      paddingRight:25,
      paddingBottom:25,
      alignSelf:'center',
      width:'90%',
      backgroundColor:'#FFFFFF',
    },
    listForm:{
      paddingLeft:25,
      paddingRight:25,
      paddingBottom:25,
      alignSelf:'center',
      width:'90%',
      backgroundColor:'#FFFFFF',
    },
    editForm:{
      paddingLeft:25,
      paddingRight:25,
      paddingBottom:25,
      alignSelf:'center',
      width:'90%',
      backgroundColor:'#FFFFFF',
    },
    simpleForm:{
    //   marginLeft:100,
    //   marginRight:100,
      // backgroundColor:'#FFFFFF',
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      backgroundImage:`url({"../icon.jpeg"})`
    },
    textInput:{
    //   paddingRight:200,
      width:'100%',
      // backgroundColor:'#FFFFFF',
      color:'white',
      textdecoration:'none',
      fontSize:'40px',
      fontWeight:'bold',
      // border: '2px solid black',
      textColor:"red",
      variant:'outlined'
    },
    textField:{
      //   paddingRight:200,
        width:'100%',
        // backgroundColor:'#FFFFFF',
        color:'white',
        textdecoration:'none',
        fontSize:'40px',
        fontWeight:'bold',
      //   border: '2px solid black',
        textColor:"red",
        variant:'outlined'
      },
    selectInput:{
        display:'inline-flex',
          // backgroundColor:'#FFFFFF',
          fontWeight:'bold',
        //   border: '2px solid black',
          color:'red',
          textColor:"red"
        },
    imageInput: {
      // width:"100%",
      // height:"100%",
      
    },
    imageField:{
      width:"100%",
      height:"100%",
     
    },
    richText:{
      margin:10, 
      paddingBottom:100,
      height:500,
      width:'50%',
      backgroundColor:'white'
    },
    boolanInput:{
        display:'inline-flex',
        width:'50%',
        // backgroundColor:'white'
      },
      dateInput:{
        width:'300px',
        // backgroundColor:'white'
      },
      editButton:{
        backgroundColor:'black'
      },  
      dataGrid:{
        margin:0, 
        backgroundColor:'white'
      },
      div:{
        color:'green',
        fontWeight:'bold',
        textalign:'center',
        fontSize:'25px',
        marginBottom:'25px',
      },
      space:{
        marginTop:'50px',
      }
      
  }));




  export default useStyles
  