import React from 'react';
import Place from './Place';

class Places extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = { places: ["Salt Lake City"] }
	// }

	render (){
		// let places = this.state.places.map( place => {
		// 	return(
		// 		<Place 
		// 			key={place._id}
		// 			/* create all the other info as props of the place */
		// 			{...place}
		// 		/>
		// 	)
		// });

		return(
			<div className="places">
				<Place />
			</div>
		)
	}
}

export default Places;