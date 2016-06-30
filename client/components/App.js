import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>New Fighting Game!</h1>
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
