import React from 'react';
<<<<<<< HEAD
import Intro from '../components/Intro';
=======
import Nav from '../components/Nav';
// import Intro from '../components/Intro';
import Places from '../components/places/Places';
>>>>>>> 5663d8d4b078336ad41342cc3e8d6f0505cc46fc

class App extends React.Component {

  render() {
    return (
      <div>
<<<<<<< HEAD
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
            </ul>
            <ul className="side-nav" id="mobile">
              <li><a href="/">Home</a></li>
            </ul>
          </div>
        </nav>
        <Intro />
=======
        <Nav />
        <Places />
>>>>>>> 5663d8d4b078336ad41342cc3e8d6f0505cc46fc
      </div>
    );
  }
}

export default App;
