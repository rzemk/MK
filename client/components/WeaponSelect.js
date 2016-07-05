/* eslint-disable no-underscore-dangle, jsx-quotes, react/prop-types, max-len */
import React from 'react';

class WeaponSelect extends React.Component {
// export default () => {
  constructor(props) {
    super(props);
    this.state = { weapons: [] };
  }

  render() {
    return (
      <div>
        <h1>Choose your weapon</h1>
        <div>
          <button onClick={this.props.prev} >Prev</button><button onClick={this.props.next}>Next</button>
          <div>
            <img role="presentation" height='150px' src={this.props.weapon.image} />
          </div>
        </div>
        <div>
          Name: {this.props.weapon.name}
        </div>
        <div>
          Attack: {this.props.weapon.attack}
        </div>
      </div>
    );
  }
}

export default WeaponSelect;
