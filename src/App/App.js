import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import SideMenu from '../components/SideMenu';
import './App.css';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#333996",
      light:"#3c44b126"
    },
    secondary:{
      main:"#f83245",
      light:"#f8324526"
    },
    background:{
      default: "#f4f5fd"
    }
  },
  shape:{
      borderRadius:'12px'
  },
  // overriding components style 
  overrides:{
    MuiAppBar:{
      root:{
        transform: 'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }  
  //thats how we do theme customization , search component and add to app.js for default
});
const useStyle = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',

  }
})
function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header></Header>
        <PageHeader title="Page Header" subTitle="Page Sub Title" icon={<PeopleOutlineIcon fontSize="large"/>}/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
