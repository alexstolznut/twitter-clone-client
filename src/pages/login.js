import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import axios from 'axios';
//MUI
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
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
}


class login extends Component {

    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            errors: {},
            loading: true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            loading: true
        });
        axios.post('/login', userData)
        .then((res) => {
            console.log(res.data);
            window.localStorage.setItem('FBIdToken', `Bearer ${res.data.tokenId}`);
            this.setState({
                loading: false
            });
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
        })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state
        return (
           <Grid container
            className={classes.formContainer}>
               {/* <Grid item sm/> */}
               <Grid item sm>
                   <img src={AppIcon} alt="monkey" className={classes.appIcon}/>
                   <Typography variant="h2" className={classes.pageTitle}>
                       Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        
                        <TextField id="email" name="email" type="email" label="Email" className={classes.textField} 
                        value={this.state.email} onChange={this.handleChange} 
                        helperText={errors.email}
                        error={errors.email ? true : false}></TextField>
                        
                        <TextField id="password" name="password" type="password" label="Password" className={classes.textField} 
                        value={this.state.password} onChange={this.handleChange} 
                        helperText={errors.password}
                        error={errors.password ? true : false}></TextField>
                        <div>
                            {errors.general && (
                                <Typography variant="body2" className={classes.generalError}>{errors.general}</Typography>
                            ) }
                        <Button id="submit" name="submit" type="submit" variant="contained" color="primary" 
                            className={classes.button} 
                            disabled={loading}>
                                {this.state.loading === true ? <CircularProgress></CircularProgress> : 'Submit'}
                        </Button>
                        </div>
                        <small>Don't have an account? Sign up <Link to='/signup'>here</Link></small>
                    </form>
               </Grid>
               {/* <Grid item sm/> */}

           </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login)