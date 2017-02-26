import React from 'react';
import Form from '../Form';
import List from '../lists/list';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.input;
        this.state = { lists: [] }
    }

    componentDidMount() {
      $.ajax({
        url: '/lists',
        type: 'GET'
      }).done( lists => {
        this.setState({ lists });
      });
    }

    addThing = (name) => {
      $.ajax({
        url: '/lists',
        type: 'POST',
        data: {name: name , catId: this.props.catId }
      }).done (list => {
        this.setState({lists: [...this.state.lists, list ] });
      });
    }

    deleteThing = (id) => {
        console.log("you called the delete function!");
      $.ajax({
        url: `/lists/${id}`,
        type: 'DELETE'
      }).done( () => {
        this.setState({ lists: this.state.lists.filter( b => b._id !== id ) });
      });
    }

    render() {
        let { catId, name } = this.props;
        let lists = this.state.lists.map( list => {
            return(
                <List 
                    key={list._id}
                    deleteThing={this.deleteThing}
                    updateThing={this.updateThing}
                    {...list}
                />
            )
        });
        return (
            <div className="col sm12 m12">
                <div className="card blue-grey darken-2">
                    <div className="card-content white-text">
                        { /* the name here gets passed down thru the props */ }
                        <span className="card-title">{name}</span>
                        <Form add={this.addThing}/>
                        { lists }
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;
