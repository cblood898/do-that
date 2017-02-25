import React from 'react';

class Selection extends React.Component {
  find() {
    console.log('salt lake!') 
  }
  render() {
    return (
     <a href="#Places"> <button onClick={this.find} className="btn-large waves-effect waves-light cyan darken-1">Salt Lake City</button></a>
    )
  }
}

export default Selection;
