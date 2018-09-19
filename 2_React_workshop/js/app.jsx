import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchbar.jsx';
import CatTable from './cattable.jsx';

var kitties = [
    {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
    {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
    {category: "male", age: "2", likesKids: false, name: "Grumpy"},
    {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
    {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
    {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            likesKids: true
        }
    }
    filterText = (childInfo) => {
        this.setState({filterText: childInfo})
    };
    filterCheck = (childInfo) => {
        this.setState({likesKids: childInfo})
    };
    render() {
        return <div>
            <SearchBar onTextChange={this.filterText} onCheckChange={this.filterCheck} filterText={this.state.filterText} likesKids={this.state.likesKids}/>
            <CatTable filterText={this.state.filterText} likesKids={this.state.likesKids} kitties={kitties} />
        </div>
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});