import React from 'react';
import Nav from '../components/Nav';
// import Intro from '../components/Intro';
import Places from '../components/places/Places';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Places />
      </div>
    );
  }
}

export default App;
