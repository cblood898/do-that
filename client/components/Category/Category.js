import React from 'react';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.input;
    }

    render() {
        let { deleteCategory, _id} = this.props;
        return (
            <div>
            <a onClick={ () => deleteCategory(_id) }>Delete</a>
            <a href={`/catgories/${_id}`}>Show</a>
            </div>
        )
    }
}

export default Category;