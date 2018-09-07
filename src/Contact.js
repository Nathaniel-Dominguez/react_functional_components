import React, { Component } from 'react';
import ContactDetails from './ContactDetails';

class Contact extends Component {
  componentDidMount(){
    document.title = 'Contact Me';
  }
  render(){
    return (<ContactDetails/>);
  }
}

export default Contact;
