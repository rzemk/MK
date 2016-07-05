/* eslint-disable jsx-quotes, no-underscore-dangle, max-len, react/prop-types */
import React from 'react';

class CreatureSelect extends React.Component {
// export default () => {
  constructor(props) {
    super(props);
    this.state = { fighters: [], next: props.next };
  }

  render() {
    return (
      <div>
        <h1>Choose your fighter</h1>
        <div>
          <button onClick={this.props.prev} >Prev</button><button onClick={this.state.next}>Next</button>
          <div>
            <img role="presentation" height='150px' src={this.props.fighter.image} />
          </div>
        </div>
        <div>
          Name: {this.props.fighter.name}
        </div>
        <div>
          Health: {this.props.fighter.health}
        </div>
        <div>
          Record: Wins:{this.props.fighter.win} Losses:{this.props.fighter.loss}
        </div>
      </div>
    );
  }
}

export default CreatureSelect;
// {this.state.fighters.map((t, i) => <img key={i} role="presentation" height='150px' src={t.image} />)}
