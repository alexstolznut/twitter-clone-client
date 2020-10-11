import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';

//MUI
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

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
        width: '40%'
    }

}


class login extends Component {

    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            loading: true
        }
    }

    handleSubmit = (event) => {
        console.log('hi')
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        const { classes } = this.props;
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
                        value={this.state.email} onChange={this.handleChange}></TextField>
                        
                        <TextField id="password" name="password" type="password" label="Password" className={classes.textField} 
                        value={this.state.password} onChange={this.handleChange}></TextField>
                        <div>
                        <Button id="submit" name="submit" type="submit" variant="contained" color="primary" className={classes.button}>Submit</Button>
                        </div>
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