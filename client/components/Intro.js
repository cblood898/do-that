import React from 'react';
import Selection from './Selection';

class Intro extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
        Find something to do near you.
        </div>
        <Selection />
      </div>
    )
  }
}

export default Intro;
