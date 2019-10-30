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
        <button onClick={getRandomImage}>Click for a random dog</button><br />
        <br />
        <img id="dogImage" alt="a dog" src="https://dog.ceo/img/dog-api-logo.svg"></img>
      </div>
    );
  }
}
 
export default Dogs;

