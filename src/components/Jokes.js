import React, { Component } from 'react';
import Joke from './Joke.js';

class Jokes extends Component {
  constructor(props){
    super(props);
    this.jokes = props.jokes;
  }

  render() { 
    const jokeElements = this.jokes.map((joke, number) => {
        return <Joke key={number} joke={joke} />
    });

    return jokeElements;
  }
}

export default Jokes;