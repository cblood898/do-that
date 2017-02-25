import React from 'react';
import Category from './Category';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [ { id: 1, name: "Food"}, { id: 2, name: "Outdoor"}, { id: 3, name: "Events"} ] }
    }
    render() {
    let categories = this.state.categories.map( category => {
      return (
        <Category
          key={category.id}
          //deleteCategory={this.deleteCategory}
          //updateCategory={this.updateCategory}
          {...category}
        />
      )
    });
      return (
          <div className="row">
              { categories }
          </div>
      )
    }
}

export default Categories;