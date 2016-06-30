<<<<<<< HEAD
/* eslint-disable max-len, quotes, arrow-body-style */
=======
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
import React from 'react';

class CreatureCreate extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    const attack = this.refs.attack.value;
    const name = this.refs.name.value;
    const image = this.refs.image.value;
<<<<<<< HEAD
    fetch('//localhost:3333/weapon/new', { method: 'post', body: JSON.stringify({ attack, name, image }), headers: { "Content-Type": "application/json" } })
=======
    fetch('//localhost:3333/weapon/new', { method: 'post', body: JSON.stringify({ attack, name, image }), headers: {"Content-Type": "application/json"} })
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
    .then((r) => { return r.json(); })
    .then((data) => {
      const sections = data.sections;
      this.setState({ sections });
    });
  }

  render() {
    return (
      <div>
        <h1>Weapon Creator</h1>
        <div>Name: <input type="text" ref="name" /></div>
        <div>Attack: <input type="Number" ref="attack" /></div>
        <div>Image: <input type="text" ref="image" /></div>
        <div><button onClick={this.submit} >Submit</button></div>
      </div>
    );
  }
}

export default CreatureCreate;
