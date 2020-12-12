import './App.css';

import React, { Component } from 'react';
import Jokes from './components/Jokes.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isLoading: true
    };
  }

  componentDidMount() { 
    this.loadJokes();
  }

  loadJokes() {
    for (var i=0; i<1; i++){
      fetch("https://api.chucknorris.io/jokes/random") 
        .then(res => res.json()) 
        .then( 
          (response) => { 
              this.state.jokes.push(response);
              this.setState({
                jokes: this.state.jokes,
                isLoading: false
              });
          }, 
          (error) => { 
            console.log('error ' + error);
          } 
        ) 
    }
  }

    render() { 
      if (this.state.isLoading) {
        return <h1>Loading...</h1>
      }
      
      return <Jokes jokes={this.state.jokes} />;
    }
}

export default App;
