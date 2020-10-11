import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import ScreamCard from '../components/ScreamCard';

class home extends Component {
   state = {
       screams: null
   }
    componentDidMount(){
        axios.get('/screams')
        .then((res) => {
            console.log(typeof res.data)
            console.log(typeof res.data[0].createdAt);
            this.setState({
                screams: res.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(scream => <ScreamCard key={scream.screamId} scream={scream}/>
            ) 
        ) : <p>Loading...</p>
        return (
            <Grid container spacing={6}>
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>...Profile</p>
                </Grid>
            </Grid>
        )
    }
}

export default home

