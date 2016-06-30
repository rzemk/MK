/* eslint-disable jsx-quotes, no-underscore-dangle */
import React from 'react';

class CreatureSelect extends React.Component {
// export default () => {
  constructor(props) {
    super(props);
    console.log('props: ', props);
    this.state = { fighters: [] };
  }

  componentDidMount() {
    fetch('//localhost:3333/creature/all')
    .then(r => r.json())
    .then(j => {
      console.log(j);
      this.setState({ fighters: j.creatures });
    });
  }

  render() {
    return (
      <div>
        <h1>Choose your fighter</h1>
        <div>
          <label>Fighter</label>
          <select ref='fighterId' >
            {this.state.fighters.map((t, i) => <option key={i} value={t._id} >{t.name}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default CreatureSelect;
