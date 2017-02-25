import React from 'react';
import Selection from './Selection';

class Intro extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3">
          Find something to do near you.
          </div>
          <Selection />
        </div>
      </div>
    )
  }
}

export default Intro;
