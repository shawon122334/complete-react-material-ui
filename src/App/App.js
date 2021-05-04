import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';

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
  }
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
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
