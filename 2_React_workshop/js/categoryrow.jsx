import React from 'react';

class CategoryRow extends React.Component {
    render() {
        return <tr> <th colSpan="2">{this.props.category}</th></tr>;
    }
}

export default CategoryRow;