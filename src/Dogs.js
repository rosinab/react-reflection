import React, { Component } from "react";
import $ from 'jquery';


function getRandomImage()
{
  // get the data from the server
  $.get( "https://dog.ceo/api/breeds/image/random", function( data ) {
    // set the source of the image
    $('#dogImage').attr('src', data.message)
  });
}


class Dogs extends Component {
  render() {
    return (
      <div>
        <h2>Dogs</h2>
        <br></br>
        <button onClick={getRandomImage}class="submit">Click for a random dog</button><br />
        <br />
        <br />
        <img id="dogImage" alt="a dog" height="350px" src="https://dog.ceo/img/dog-api-logo.svg"></img>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
 
export default Dogs;

