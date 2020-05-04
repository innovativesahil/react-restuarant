import React, { Component } from 'react';
import { render } from 'react-dom';
import './RestaurantCard.css';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class RestaurantCard extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Card>
        <CardImg top width="100%" src="https://via.placeholder.com/500x300.png/fa3/b1c?text=Random+Hotel+Image" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}