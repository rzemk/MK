/* eslint-disable jsx-quotes, no-underscore-dangle, max-len, arrow-body-style */
import React from 'react';
import CreatureSelect from './CreatureSelect';
import WeaponSelect from './WeaponSelect';
import Fighter from './Fighter';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: 30, fighter: '', opponent: '', weapon: '', opponentWeapon: '', fighting: false, fighterMaxHealth: 0, opponentMaxHealth: 0 };
    this.startFight = this.startFight.bind(this);
    this.rematch = this.rematch.bind(this);
    this.reset = this.reset.bind(this);
  }

  setFighters(fighter, fighters, weapons) {
    const weapon = weapons.find(f => f._id === this.refs.weaponRef.refs.weaponId.value);

    const opponent = fighters[Math.floor(Math.random() * fighters.length)];
    const opponentWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    const fighterMaxHealth = fighter.health;
    const opponentMaxHealth = opponent.health;
    this.setState({ fighter, weapon, opponent, opponentWeapon, fighterMaxHealth, opponentMaxHealth });
  }

  startFight() {
    let creatures = [];
    let weapons = [];
    let fighter;
    fetch('//localhost:3333/creature/all')
    .then((r) => { return r.json(); })
    .then((data) => {
      creatures = data.creatures;
      this.setState({ creatures });
      const id = this.refs.fightRef.refs.fighterId.value;
      fetch(`//localhost:3333/creature/${id}/find`)
      .then((r) => { return r.json(); })
      .then((data2) => {
        fighter = data2.creature;
        // this.setState({ creatures });
        fetch('//localhost:3333/weapon/all')
        .then((r) => { return r.json(); })
        .then((data3) => {
          weapons = data3.weapons;
          this.setState({ weapons });
          this.setState({ fighting: true });
          this.setFighters(fighter, creatures, weapons);
        });
      });
    });
    this.fight();
  }

  fight() {
    this.interval = setTimeout(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
      if (this.state.fighter.health <= 0 || this.state.opponent.health <= 0) {
        this.updateFighter();
      } else {
        const fighter = this.state.fighter;
        const opponent = this.state.opponent;
        const weapon = this.state.weapon;
        const opponentWeapon = this.state.opponentWeapon;

        opponent.health = opponent.health - (Math.random() * weapon.attack);
        fighter.health = fighter.health - (Math.random() * opponentWeapon.attack);
        this.setState({ opponent, fighter });
        this.fight();
      }
    }, 300);
  }

  updateFighter() {
    let win = this.state.fighter.win;
    let loss = this.state.fighter.loss;

    if (this.state.fighter.health > 0) {
      win++;
    } else {
      loss++;
    }
    fetch(`//localhost:3333/creature/${this.state.fighter._id}/update`, { method: 'put', body: JSON.stringify({ win, loss }), headers: { "Content-Type": "application/json" } })
    .then(r => r.json())
    .then((r) => {
    });
  }

  reset() {
    this.setState({ fighting: false });
  }

  rematch() {
    const fighter = this.state.fighter;
    const opponent = this.state.opponent;
    fighter.health = this.state.fighterMaxHealth;
    opponent.health = this.state.opponentMaxHealth;
    this.fight();
  }

  render() {
    let selectDisplay = '';
    let fightDisplay = '';
    if (this.state.fighting) {
      selectDisplay = 'none';
      fightDisplay = 'inline-block';
    } else {
      selectDisplay = 'inline-block';
      fightDisplay = 'none';
    }
    return (
      <div>
        <div style={{ display: selectDisplay }}>
          <div>
            <CreatureSelect ref='fightRef' />
          </div>
          <div>
            <WeaponSelect ref='weaponRef' />
          </div>
          <div>
            <button onClick={this.startFight} >Fight!</button>
          </div>
        </div>
        <div style={{ display: fightDisplay }} >
          <div style={{ display: 'inline-block' }} >
            <h1>You</h1>
            <Fighter name={this.state.fighter.name} health={this.state.fighter.health} image={this.state.fighter.image} weapon={this.state.weapon.name} maxHealth={this.state.fighterMaxHealth} weaponImage={this.state.weapon.image} win={this.state.fighter.win} loss={this.state.fighter.loss} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h1>VS:</h1>
          </div>
          <div style={{ display: 'inline-block' }}>
            <h1>Opponent</h1>
            <Fighter name={this.state.opponent.name} health={this.state.opponent.health} image={this.state.opponent.image} weapon={this.state.opponentWeapon.name} maxHealth={this.state.opponentMaxHealth} weaponImage={this.state.opponentWeapon.image} win={this.state.opponent.win} loss={this.state.opponent.loss} />
          </div>
          <div>
            <button onClick={this.rematch}>Rematch</button>
            <button onClick={this.reset}>Select new fighter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Fight;
