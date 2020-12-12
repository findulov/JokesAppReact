import React, { Component } from 'react';

class Joke extends Component {
    constructor(props){
        super(props);
        this.joke = props.joke;
        console.log(props);
      }

    render() { 
        return <h4>{this.joke.value}</h4>
      }
}

export default Joke;