import React from 'react';

class List extends React.Component {

	render() {
		let { deleteThing, _id, name } = this.props;

		return(
			<div className="row card-panel teal lighten-2">
				<h5> { name } </h5>
				<div className="card-action">
						<a style={{float:"right"}} className="right-align" onClick={ () => deleteThing(_id) }>
							Delete
						</a>
					</div>
			</div>
		)
	}

}

export default List;
