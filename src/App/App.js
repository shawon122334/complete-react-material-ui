import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';

const useStyle = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',

  }
})
function App() {
  const classes = useStyle();
  return (
    <div>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
