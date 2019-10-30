import React, { Component } from "react";
import ClassForm from './Form';
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <br />
        <ClassForm />
        <br />
        <div class="hr"></div>
        <br />
        <h2>About the Generator</h2>
        <br />
        <p>Our generator uses an API from Dog.CEO. This API contains the internet's biggest collection of open source dog pictures. If you're interested you can find their site <a href="https://dog.ceo/dog-api/">here</a>.</p> 
        <p>You can also submit your own dog pictures to them!</p>
      </div>
    );
  }
}
 
export default Contact;