
import './assets/css/App.css';

import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';



class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
        db: [],
        id: 0,
        title: '',
        rating: '',
        awards: '',
        release_date: '',
        length: 0
    }
}



peticionGet = () => {
    axios.get(`http://localhost:3001/movies`)
        .then(res => {
            console.log(res);
            this.setState({ db: res.data });
        });
}



componentDidMount() {
    this._isMounted = true;
    this.peticionGet();
}
componentWillUnmount() {
    this._isMounted = false;
}




render() {
    
    const instrumentos = this.state.db.map((movie, i) => {
            return (
                <tr>
                    <th>{movie.title}</th>
                    <th>{movie.rating}</th>
                    <th>{movie.awards}</th>
                    <th>{movie.release_date}</th>
                    <th>{movie.length}</th>

                </tr>
            )
        } 
        

    )

    return (
        <React.Fragment>
            <div className="center">
                <Table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">title</th>
                            <th scope="col">rating</th>
                            <th scope="col">awards</th>
                            <th scope="col">release_date</th>
                            <th scope="col">length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instrumentos}
                    </tbody>
                </Table>

            </div>
        </React.Fragment>
    )
}
}
export default App;