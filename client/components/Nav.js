/* eslint-disable max-len */

import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Mortal Kombat!</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/"><i className="fa fa-home fa-fw"></i> Home</Link></li>
          <li><Link to="/creature"><i className="fa fa-male fa-fw"></i> New Fighter</Link></li>
          <li><Link to="/weapon"><i className="fa fa-crosshairs fa-fw"></i> New Weapon</Link></li>
          <li><Link to="/fight"><i className="fa fa-shield fa-fw"></i> Fight</Link></li>
          <li><Link to="/about"><i className="fa fa-hashtag fa-fw"></i> About</Link></li>
          <li><Link to="/faq"><i className="fa fa-question-circle-o fa-fw"></i> Faq</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
