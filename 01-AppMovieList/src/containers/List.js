import React, { Component } from 'react';
import Card from '../components/Card/Card.js';
import testData from './data.json';

class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
        }
    }

    async componentDidMount() {
        const movies = await fetch('./data.json');
        const moviesJSON = await movies.json();
        if (moviesJSON) {
            this.setState({
                data: moviesJSON,
                loading: false,
            });
        }
        
    }

                
    render() {
        console.log(JSON.stringify(testData)); // works

        const { data , loading } = this.state;
        
     

        return(
            testData.map(movie => <Card key={ movie.id } movie={ movie } />)
        );
    }
};

export default List;