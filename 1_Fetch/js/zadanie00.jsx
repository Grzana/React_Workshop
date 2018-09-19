import React from 'react';
import ReactDOM from 'react-dom';

class BookInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        }
    }
    componentDidMount() {
        const api = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
        fetch(`${api}${this.props.isbn}`).then(r => {
            if(r.ok) {
                return r.json()
            } else {
                throw new Error("Błąd sieci")
            }
        }).then(data => {
            this.setState({data})
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        if (this.state.data === false) {
            return <h1>Ładuję...</h1>
        } else {
            return <div>
                {this.state.data.items.map(book => {
                return <h1 key={book.id}>{book.volumeInfo.title}</h1>
            })}
            </div>
        }
    }
}

class App extends React.Component {
    render() {
        return <BookInfo isbn="0747532699"/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});