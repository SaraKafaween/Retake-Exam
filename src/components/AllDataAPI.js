import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, CardImg } from 'react-bootstrap';
import { Button } from 'bootstrap';


class AllDataAPI extends Component {
    render() {
        return data.map((item)=>{
                return(
                <Card>
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <CardImg src={item.image}></CardImg>
                    </Card.Body>
                    <Button onClick={this.props.addToFav}>Add To Fav</Button>
                </Card>
        )
                })
        
    }
}

export default withAuth0(AllDataAPI);
