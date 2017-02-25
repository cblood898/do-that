import React from 'react';
import Selection from './Selection';

class Intro extends React.Component {
  render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col s6 offset-s3">
      //     Find something to do near you.
      //     </div>
      //     <Selection />
      //   </div>
      // </div>
    
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br /><br />
        <h2 className="header center  white-text text-darken-1"> Discover something random to do.</h2>
        <div className="row center">
          <h5 className="header col s12 white-text text-darken-2">Pick a Place </h5>
        </div>
        <div className="row center">
           <Selection />
        </div>
        <br /><br />

      </div>
    </div>
   
<div className="parallax"><img  src="/images/SLC.png" alt="Unsplashed background img 1" /></div>
    
  </div> 
   
    )
  }
}

export default Intro;
