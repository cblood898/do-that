import React from 'react';
import Category from './Category';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [ "Food", "Events", "Outdoor" ] }
    }
    render() {
    // let categories = this.state.categories.map( category => {
    //   return (
    //     <Category
    //       key={category._id}
    //       //deleteCategory={this.deleteCategory}
    //       //updateCategory={this.updateCategory}
    //       {...category}
    //     />
    //   )
    // });
      return (
          <div className="row">
              <Category />
          </div>
      )
    }
}

export default Categories;