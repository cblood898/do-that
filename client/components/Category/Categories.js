import React from 'react';
import Form from '../Form';
import Category from './Category';

class Category extends react.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [ "Food", "Events", "Outdoor" ] }
    }
    render() {
    let categories = this.state.categories.map( category => {
      return (
        <Category
          key={category._id}
          //deleteCategory={this.deleteCategory}
          //updateCategory={this.updateCategory}
          {...category}
        />
      )
    });
    return (
        <div className="row">
            {catergory}
        </div>
    )

    }
}

export default Categories;