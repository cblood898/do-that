import React from 'react';
import Form from '../Form';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.input;
    }

    render() {
        let { deleteCategory, _id} = this.props;
        return (
            <div>
            <p>I am a category!</p>
            <a onClick={ () => deleteCategory(_id) }>Delete</a>
            <a href={`/catgories/${_id}`}>Show</a>
            </div>
        )
    }
}

export default Category;