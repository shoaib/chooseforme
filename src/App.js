import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MainForm from './components/MainForm';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <Container className="ui center aligned grid">
        <MainForm />
      </Container>
      </div>
    );
  }
}

export default App;
