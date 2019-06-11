import React, { PureComponent } from "react";
import { Link } from 'react-router-dom'

class App extends PureComponent {
  render() {
    return (
      <div>
          {this.props.children}
       </div>
    );
  }
}
export default App;
