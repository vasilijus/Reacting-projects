import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return <h1>Hello Wordl</h1>;
};

console.log('movie app');

ReactDOM.render( <App/>, document.getElementById('root') );

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }
  
//   document.body.appendChild(component());