import React from 'react';
import ReactDOM from 'react-dom';
import HelloReact from './HelloReact.js';

ReactDOM.render(<HelloReact />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./print.js', function(){
      console.log("Accepting the updated printMe module!");
      printMe();
  })
}