import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import decodeToken from 'jwt-decode';
//Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

//Components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';

let authenticated;
const token = localStorage.FBIdToken;
if(token) {
  const decodedToken = decodeToken(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href='/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
  
}
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
  },
  formContainer: {
    textAlign: 'center'
  },
    appIcon: {
        width: '5rem',
        height: '5rem',
        margin: '20px auto 20px auto'
    },
    textField: {
        margin: '20px auto 20px auto',
        width: '60%'
    },
    button: {
        width: '40%',
        marginTop: 10
    },
    generalError: {
        color: 'red',
        fontSize: '0.8em',
        marginTop: 10
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
          <AuthRoute exact path="/login" component={Login} authenticated={authenticated}/>
          <AuthRoute exact path="/signup" component={Signup} authenticated={authenticated}/>
        </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
