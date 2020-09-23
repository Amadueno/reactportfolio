  
import React from 'react'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Portfolio = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sensify</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>JavaScript</CardText>
          <a href="https://daniellehillman.github.io/Sensify/"><Button>Check out my project!</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>LifeTrack</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>JavaScript/Node.js</CardText>
          <a href=" https://afternoon-stream-93666.herokuapp.com/diary.html"><Button>Check out my project!</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dungeon Sheets</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>React.JS/MySql</CardText>
          <Button>Check out my project</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Portfolio;