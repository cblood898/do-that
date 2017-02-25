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
        <h1 className="header center  cyan-text text-darken-1"> Find something to do near you.</h1>
        <div className="row center">
          <h5 className="header col s12 grey-text text-darken-2">Pick a Place </h5>
        </div>
        <div className="row center">
           <Selection />
        </div>
        <br /><br />

      </div>
    </div>
   
<div className="parallax"><img style={{opacity: "0.5"}} src="/images/SLC.jpg" alt="Unsplashed background img 1" /></div>
    
  </div> 
   
    )
  }
}

export default Intro;
