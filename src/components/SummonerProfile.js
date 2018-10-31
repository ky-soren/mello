import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 345,
    }
}

class SummonerProfile extends Component {
    render() {
        const { classes } = this.props
        const winRatio = Math.round((this.props.wins / (this.props.losses + this.props.wins))*100)
        return (
           <Card classes={{ root: classes.card }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="p">
                        {this.props.summonerName}
                    </Typography>    
                    <Typography component="p">
                         {this.props.tier} {this.props.rank}
                    </Typography>
                    <Typography component="p">
                       W:{this.props.wins} L:{this.props.losses}
                    </Typography>
                    <Typography component="p">
                       Win Ratio: {winRatio}%
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button size="small" color="primary" >
                            Match History
                        </Button>
                </CardActions>   
           </Card>
           
        )
    }
}

export default injectSheet(styles)(SummonerProfile);