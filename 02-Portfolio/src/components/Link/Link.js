import React from 'react';
import './Link.css';

const Link = ({ url, title }) => (
    <a href={ url } 
        class="App-link"
        target="_blank"
    >{ title }</a>
);

export default Link;