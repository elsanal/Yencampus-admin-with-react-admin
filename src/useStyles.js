import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
  import InputLabel from '@material-ui/core/InputLabel';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
  import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    create:{
      padding:50,
      alignSelf:'center',
      width:'90%',
      backgroundColor:'#212121',
    },
    form:{
    //   marginLeft:100,
    //   marginRight:100,
      backgroundColor:'white',
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      backgroundImage:`url({"../icon.jpeg"})`
    },
    textInput:{
    //   paddingRight:200,
      width:'100%',
      backgroundColor:'#FFFFFF',
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
          backgroundColor:'#FFFFFF',
          fontWeight:'bold',
        //   border: '2px solid black',
          color:'red',
          textColor:"red"
        },
    image: {
      width:"100%",
      height:"100%",
      backgroundColor:'white',
      color:"orange"
    },
    selectedImg:{
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
    tabbedForm:{
        margin:10, 
        paddingBottom:100,
        width:'50%',
        backgroundColor:'red'
      },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input:{
        width:600,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    // form: {
    
    // },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));




  export default useStyles
  