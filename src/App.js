import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

//Components
import Navbar from './components/Navbar';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#00bcd4',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff3d00',
      contrastText: '#fff'
    }
  }
})
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
