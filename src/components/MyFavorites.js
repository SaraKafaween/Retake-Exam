import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';

class MyFavorites extends React.Component {
  render() {
    return favs.map((item)=>{
      return(
      <Card>
          <Card.Body>
          <Card.Title>{item.favs.title}</Card.Title>
          <CardImg src={item.favs.image}></CardImg>
          </Card.Body>
          <Button onClick={this.props.handleModalOpen}>Edit</Button>
      </Card>
)
      })

}}

export default withAuth0(MyFavorites);

