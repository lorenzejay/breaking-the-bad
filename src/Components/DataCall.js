import React, { Component } from 'react';
import axios from 'axios';

class DataCall extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  async getInfo(){
    const res = await axios.get('http://localhost:3008/characters');
    const characters = res.data;
    console.log(characters); // Here is the array of Characters from the Backend.
  }

  componentDidMount(){
    this.getInfo();
  }
  
  render(){
    return(
      <div></div>
    );
  }
}

export default DataCall;