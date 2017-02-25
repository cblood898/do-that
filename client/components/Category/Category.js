import React from 'react';
import Form from '../Form';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.input;
        this.state = {categoryID: this.props.catID, thingsTodo: [{ _id: "aawdqwd23r23rfe", name: "Johnny's Pizza", description: "yummy"}]}
    }

addThing = (e) => {
  e.preventDefault();
  $.ajax({
    url: '/lists',
    type: 'POST',
    data: {name}
  }).done (list => {
    this.setState({lists: {...this.state.lists, list });
  });
}

deleteBoard = (id) => {
  $.ajax({
    url: `/lists/${id}`,
    type: 'DELETE'
  }).done( () => {
    this.setState({ boards: this.state.lists.filter( b => b._id !== id ) });
  });
}

    render() {
        let { id, name } = this.props;
        return (
            <div className="col sm12 m4">
                <div className="card blue-grey darken-2">
                    <div className="card-content white-text">
                        { /* the name here gets passed down thru the props */ }
                        <span className="card-title">{name}</span>
                        <Form />

                    </div>
                </div>
            </div>
        )
    }
}

export default Category;
