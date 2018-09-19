import React from 'react';

class CatRow extends React.Component {
    render() {
        var name = this.props.kitty.likesKids ?
            this.props.kitty.name : <span style={{color: 'red'}}> {this.props.kitty.name} </span>;
        return <tr> <td>{name}</td> <td>{this.props.kitty.age}</td> </tr>;
    }
}

export default CatRow;