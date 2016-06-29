/* eslint-disable jsx-quotes */
import React from 'react';
import CreatureSelect from './CreatureSelect';
import WeaponSelect from './WeaponSelect';

class Fight extends React.Component {
  constructor (props) {
    super(props);

    this.fight = this.fight.bind(this);
    this.choose = this.choose.bind(this);
  }

  fight() {
    console.log('this: ', this);
    console.log('fight refs', this.refs.fightref.refs.fighterId.value);
  }

  choose() {
    console.log('in choose', this);
    console.log('choose refs', this.refs.fightref.refs.fighterId.value);
  }

  render() {
    return (
      <div>
        <div>
          <CreatureSelect ref='fightref' choose={this.choose} />
        </div>
        <div>
          <WeaponSelect ref='fightref2' />
        </div>
        <div>
          <button onClick={this.fight} >Fight</button>
        </div>
      </div>
    );
  }
}

export default Fight;
