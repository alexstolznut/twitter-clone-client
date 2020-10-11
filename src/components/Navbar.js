import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navContainer: {
        margin: 'auto',
    },
    buttonCenter: {
        margin: 'auto',
        marginRight: theme.spacing(5)
    }
}));


export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar edge="start">
                    <Typography variant="h6" className={classes.title}>
                        Social Ape
                    </Typography>
                  <div className={classes.buttonCenter}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="signup">Signup</Button>
                </div>
                </Toolbar>
                    
               
            </AppBar>
            
        </div>
    )
}


