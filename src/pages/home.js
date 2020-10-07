import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class Home extends Component {
   state = {
       screams: null
   }
    componentDidMount(){
        axios.get('/screams')
        .then(res => {
            console.log(res.data)
            this.setState({
                screams: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Grid container spacing={6}>
                <Grid item sm={8} xs={12}>
                    <p>...Content</p>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>...Profile</p>
                </Grid>
            </Grid>
        )
    }
}

export default Home

