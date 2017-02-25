import React from 'react';
import Form from '../Form';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.input;
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