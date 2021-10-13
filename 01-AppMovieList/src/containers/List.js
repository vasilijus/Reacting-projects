import React, { Component } from 'react';
import Card from '../components/Card/Card.js';

class List extends Component {
    render() {
        return(
            <div>
                <h1>Hello List</h1>
                <Card />
            </div>
        );
    }
};

export default List;