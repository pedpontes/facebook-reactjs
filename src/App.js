import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="facebook." perfil="Meu perfil"/>
        <PostList>
        </PostList>
      </div>
    );
  }
}

export default App;
