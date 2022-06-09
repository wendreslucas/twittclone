import React from 'react';
import { Container, Wrapper } from './styles';
import Main from '../../components/Main';
import MenuBar from '../../components/MenuBar';
import Sidebar from '../../components/Sidebar';

function Home() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}

export default Home;
