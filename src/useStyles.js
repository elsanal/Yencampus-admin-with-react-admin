import {
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
  


const useStyles = makeStyles((theme) => ({
  appBar:{
    display: 'flex',
    flex:'start',
    flexDirection:'row',
    flexWrap:'wrap',
    width: '100vw',
    backgroundColor:'#291B1B',
    alignItems:'center',
    justifyItems:"space-between"
  },
  drawer:{
    paddingLeft:25,
      paddingRight:25,
      paddingBottom:25,
      alignSelf:'center',
      width:'90%',
      backgroundColor:'#FFFFFF',

  },
  layout:{
      backgroundColor:'#111010',
  },
  avatar:{
    flex:'inline',
    paddingLeft:90,
    // width:'100%',
    backgroundColor:'#C47A7A',
  },
    create:{
      paddingLeft:25,
      paddingRight:25,
      paddingBottom:25,
      alignSelf:'center',
      width:'100%',
      backgroundColor:'#533A3A',
      minHeight:'90vh',
    },
    listForm:{
      paddingLeft:25,
      paddingRight:25,
      // paddingBottom:25,
      alignSelf:'center',
      width:'100%',
      backgroundColor:'#533A3A',
      minHeight:'100vh',
    },
    editForm:{
      paddingLeft:25,
      paddingRight:25,
      // paddingBottom:25,
      alignSelf:'center',
      width:'100%',
      backgroundColor:'#533A3A',
      minHeight:'90vh',
    },
    simpleForm:{
    
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      
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
  