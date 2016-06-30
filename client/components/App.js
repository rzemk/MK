import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>New Fighting Game!</h1>
=======
        <h1>my new app page</h1>
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/creature">New Fighter</Link></li>
          <li><Link to="/weapon">New Weapon</Link></li>
          <li><Link to="/fight">Fight!</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
