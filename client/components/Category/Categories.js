import React from 'react';
import Category from './Category';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [ { catId: 1, name: "Food"}] }
    }
    render() {
    let categories = this.state.categories.map( category => {
      return (
        <Category
          key={category.catId}
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