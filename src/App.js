import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Selection from './Shipping/Selection';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className="App">
         <Router>
      <div>
      <AppBar position="static">
        <Toolbar>
          <div style={{width:"100%"}}>
          <Button color="inherit" style={{ float: "right"}}><Link to="/history" style={{textDecoration:"none", color:"white" }}>History</Link> </Button>
          <Button color="inherit" style={{ float: "right" }}><Link to="/" style={{textDecoration:"none", color:"white" }}>Shippment</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
        <Route path="/" exact component={Selection} />
      </div>
    </Router>
    </div>
  );
}

export default App;
