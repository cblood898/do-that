import React from 'react';
import Categories from './Category/Categories';

class Place extends React.Component {
	render(){
		return(
			<div className="place">
				<h2>Salt Lake City</h2>
				<p>Explore things to do:</p>
				<Categories />
			</div>
		)
	}
}

export default Place;