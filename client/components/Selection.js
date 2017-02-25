import React from 'react';

class Selection extends React.Component {
  find() {
    console.log('salt lake!')
  }
  render() {
    return (
      <button onClick={this.find}>Salt Lake City</button>
    )
  }
}

export default Selection;
