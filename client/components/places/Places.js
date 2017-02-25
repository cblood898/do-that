import React from 'react';

class Places extends React.Component {
	constructor(props){
		super(props);
		this.state = { places: ["Salt Lake City"] }
	}

	return(
		let places = this.state.places.map( place => {
			return(
				<Place 
					key={place._id}
					/* create all the other info as props of the place */
					{...place}
			)
		})
		<div className="places">
			{ places }
		</div>
	)
}

export default Places;