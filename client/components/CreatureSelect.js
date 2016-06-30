<<<<<<< HEAD
/* eslint-disable jsx-quotes, no-underscore-dangle */
=======
/* eslint-disable jsx-quotes */
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
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
<<<<<<< HEAD
=======
        <div>
          <button onClick={this.props.choose} >Choose</button>
        </div>
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
      </div>
    );
  }
}

export default CreatureSelect;
