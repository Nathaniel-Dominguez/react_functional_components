import React, { Component } from 'react';
import HomeContent from './HomeContent';
import HomeImage from './HomeImage';

class Home extends Component {
  componentDidMount(){
    document.title = 'Home';
  }
  render(){
    return (
		<div>
    		<HomeContent name="Nate.D" />
			<HomeImage />
		</div>
    		);
  }
}

export default Home;
