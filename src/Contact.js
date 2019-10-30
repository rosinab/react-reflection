import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
 

const config = {
  api: `${process.env.REACT_APP_API}`,
  title: 'Contact Me',
  successMessage: 'Thank you for contacting me.',
  errorMessage: 'Sorry we have some problems.',
  fields:{
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
  },
  fieldsConfig:  [
   { id: 1, label: 'First Name', fieldName: 'firstName', type: 'text',placeholder:'Your First Name', isRequired: true , className:'first-name-field'},
   { id: 2, label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Your Last Name', isRequired: true , className:'last-name-field'},
   { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , className:'email-field'},
   { id: 4, label: 'Message', fieldName: 'msg', type: 'textarea',placeholder:'Write something.....', isRequired: true , className:'message-field'}
  ]
};

class Contact extends Component {
  render() {
    return (
      <div>
       <h2>Contact Us</h2>
       <br />
       <Form />
      </div>
    );
  }
}
 
export default Contact;

ReactDOM.render(<Form config={config} />);