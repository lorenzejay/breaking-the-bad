import React, { Component } from 'react';
import axios from 'axios';

class DataCall extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  async getInfo(){
    const res = await axios.get('https://www.breakingbadapi.com/api/characters')
    console.log(res.data);
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