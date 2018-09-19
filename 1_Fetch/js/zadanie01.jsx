import React from 'react';
import ReactDOM from 'react-dom';

// uruochomienie json server: json-server db.json --watch

document.addEventListener('DOMContentLoaded', function () {

    class CarsDbManager extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: false
            }
        }

        componentDidMount() {
            fetch("http://localhost:3000/cars").then(r => {
                if (r.ok) {
                    return r.json()
                } else {
                    throw new Error("TOTALNY FAIL")
                }
            }).then(data => {
                this.setState({data});
                console.log(this.state.data)
            }).catch(err => {
                console.log(err)
            })
        }
        delete = id => {
            console.log('działa');
            fetch(`http://localhost:3000/cars/${id}`, {
                method: 'DELETE'
            }).then(response => response.json()).then(this.setState({data: this.state.data.filter(car => car.id !== id)}))
        };
        render() {
            if (this.state.data === false) {
                return <h1>Ładuję...</h1>
            } else {
                return <div>
                    {this.state.data.map((car) => {
                    return <ul key={car.id}>
                        <li>{car.brand}</li>
                        <li>{car.name}</li>
                        <button onClick={() => this.delete(car.id)}>Sprzedany</button>
                    </ul>
                })}
                </div>
            }
        }
    }

    ReactDOM.render(
        <CarsDbManager/>,
        document.getElementById('app')
    );
});