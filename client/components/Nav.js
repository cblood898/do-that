import React from 'react';

class Nav extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    let navs = [
      { name: 'Home', url: '/'},
    ].map( (nav, i) => {
      return (
        <li key={i}>
         <a href={nav.url}>{nav.name}</a>
       </li>
      )
    });

    return (
      // <nav>
      //   <div className="nav-wrapper">
      //    <a href="/" className="brand-logo">Do That</a>
      //    <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      //    <ul className="right hide-on-med-and-down">
      //      { navs }
      //    </ul>
      //    <ul className="side-nav" id="mobile">
      //      { navs }
      //    </ul>
      //   </div>
      //  </nav>

<nav className="cyan darken-2" role="navigation">
    <div className="nav-wrapper container">
      <a id="logo-container" href="/" className="brand-logo center"><img style={{margin:"5px", height:"50px"}}src="images/Group.png"/></a>
  

      <ul id="nav-mobile" className="side-nav">
        <li><a href="/">Menu 1</a></li>
        <li><a href="/">Menu 2</a></li>
      </ul>
      <a href="/" data-activates="nav-mobile" className="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>

     );
   }
}

export default Nav;