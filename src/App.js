import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './styles/global';

import './config/reactotron';
import { Wrapper, Container, Content } from './styles/components';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import ErrorBox from './components/ErrorBox';
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
            <ErrorBox />
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
