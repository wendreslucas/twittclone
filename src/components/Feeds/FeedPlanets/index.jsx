import React from 'react';
import Planet from '../../Planet';
import { Container, Tab, Movies } from './styles';

function FeedPlanets() {
  return (
    <Container>
      <Tab>Planets</Tab>
      <Movies>
        <Planet />
      </Movies>
    </Container>
  );
}

export default FeedPlanets;