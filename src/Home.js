import React, { Component } from "react";
import dog from './dog.png';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <br />
        <img src={dog} alt="" class="img"></img>
        <p>Back in 2010 it was found that around 74% of the population love dogs. Our canine
        companions give us comfort, company and can help many get some much needed exercise. But
        sometimes we can't be around them. Whether it's because we're allergic, we're not allowed a dog
        where we live or we're just at work and can't go home to hug our pooch; sometimes we just need to see one.</p>
 
        <p>This is where our Random Dog Generator comes in.</p>

        <p>Using DOG CEO's API, we provide a simple and easy to access page so you can generate as many random pictures of dogs as you like.</p>

        <h2 class="impact">Click on the Dogs link in the menu to access the generator.</h2>
      </div>
    );
  }
}
 
export default Home;