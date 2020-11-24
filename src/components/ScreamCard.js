import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography} from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';


const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
        alignItem: 'center'
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }

}
class ScreamCard extends Component {
    render() {
        const {classes, scream: {userImage, body, createdAt, likeCount, commentCount, userHandle} } = this.props;
        dayjs.extend(relativeTime);
       
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                    image={userImage}
                    title="Profile Image"
                    className={classes.image}
                    >

                    </CardMedia>

                    <CardContent className={classes.content}>
                       <Typography color="primary" variant="h5" component={Link} to={`/user/${userHandle}`}>{userHandle}</Typography> 
                       <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                       <Typography variant="body1">{body}</Typography>
                    </CardContent> 
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(ScreamCard)
