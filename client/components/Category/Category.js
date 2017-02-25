import React from 'react';
import Form from '../Form';
import List from '../lists/list';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.input;
        this.state = {categoryID: this.props.catID, thingsTodo: [{ _id: "aawdqwd23r23rfe", name: "Johnny's Pizza", description: "yummy"}]}
    }

    addThing = (name) => {
        let { catId } = this.props;
      $.ajax({
        url: '/lists',
        type: 'POST',
        data: {catId, name, description }
      }).done (list => {
        this.setState({lists: {...this.state.lists, list } });
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
                        <List />
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;
