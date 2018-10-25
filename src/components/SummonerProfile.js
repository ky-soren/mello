import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SummonerProfile extends Component {
    render() {
        return (
           <Card>
            <CardActionArea>
                <CardContent>
                    <Typography component="h3">
                        {this.props.summonerName}
                    </Typography>    
                    <Typography component="h4">
                         {this.props.tier} {this.props.rank}
                    </Typography>
                    <Typography component="h5">
                       W:{this.props.wins} L:{this.props.losses}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button size="small" color="primary" variant="raised">
                            Match History
                        </Button>
                </CardActions>   
           </Card>
           
        )
    }
}

export default SummonerProfile;