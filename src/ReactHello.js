import React from 'react';
import { hot } from 'react-hot-loader'

class HelloReact extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return( <div>Hello React</div>);
  }
}

export default hot(module)(HelloReact);