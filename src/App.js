import React from 'react';
import './styles/global';
import { Provider } from 'react-redux';

import './config/reactotron';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper, Container, Content } from './styles/components';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
