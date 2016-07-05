/* eslint-disable jsx-quotes, no-underscore-dangle, max-len, arrow-body-style */
import React from 'react';
import CreatureSelect from './CreatureSelect';
import WeaponSelect from './WeaponSelect';
import Fighter from './Fighter';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fighter: '', opponent: '', weapon: '', opponentWeapon: '', fighting: false, fighterMaxHealth: 0, opponentMaxHealth: 0, fighterSelect: 0, fighters: [{ image: '' }], weaponSelect: 0, weapons: [{ image: '' }] };
    this.startFight = this.startFight.bind(this);
    this.rematch = this.rematch.bind(this);
    this.reset = this.reset.bind(this);
    this.fighterNext = this.fighterNext.bind(this);
    this.fighterPrev = this.fighterPrev.bind(this);
    this.weaponNext = this.weaponNext.bind(this);
    this.weaponPrev = this.weaponPrev.bind(this);
  }

  componentDidMount() {
    let weapons = [];
    let fighters = [];
    fetch('//localhost:3333/creature/all')
    .then(r => r.json())
    .then(j => {
      fetch('//localhost:3333/weapon/all')
      .then((r) => { return r.json(); })
      .then((data3) => {
        fighters = j.creatures;
        weapons = data3.weapons;
        this.setState({ weapons, fighters });
      });
    });
  }

  setFighters() {
    const weapon = this.state.weapons[this.state.weaponSelect];
    const fighter = this.state.fighters[this.state.fighterSelect];

    const opponent = this.state.fighters[Math.floor(Math.random() * this.state.fighters.length)];
    const opponentWeapon = this.state.weapons[Math.floor(Math.random() * this.state.weapons.length)];
    const fighterMaxHealth = fighter.health;
    const opponentMaxHealth = opponent.health;
    this.setState({ fighter, weapon, opponent, opponentWeapon, fighterMaxHealth, opponentMaxHealth });
  }

  startFight() {
    this.setState({ fighting: true });
    this.setFighters();
    this.fight();
  }


  fight() {
    this.interval = setInterval(() => {
      if (this.state.fighter.health <= 0 || this.state.opponent.health <= 0) {
        this.updateFighter();
        clearInterval(this.interval);
      } else {
        const fighter = this.state.fighter;
        const opponent = this.state.opponent;
        const weapon = this.state.weapon;
        const opponentWeapon = this.state.opponentWeapon;

        opponent.health = opponent.health - (Math.random() * weapon.attack);
        fighter.health = fighter.health - (Math.random() * opponentWeapon.attack);
        this.setState({ opponent, fighter });
      }
    }, 300);
  }

  updateFighter() {
    const fighter = this.state.fighter;
    let win = fighter.win;
    let loss = fighter.loss;

    if (fighter.health > 0) {
      win++;
      fighter.win = win;
    } else {
      loss++;
      fighter.loss = loss;
    }

    fetch(`//localhost:3333/creature/${this.state.fighter._id}/update`, { method: 'put', body: JSON.stringify({ win, loss }), headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => {
      this.setState(fighter);
    });
  }

  reset() {
    const fighter = this.state.fighter;
    const opponent = this.state.opponent;
    fighter.health = this.state.fighterMaxHealth;
    opponent.health = this.state.opponentMaxHealth;
    this.setState({ fighting: false });
  }

  rematch() {
    const fighter = this.state.fighter;
    const opponent = this.state.opponent;
    fighter.health = this.state.fighterMaxHealth;
    opponent.health = this.state.opponentMaxHealth;
    this.fight();
  }

  fighterPrev() {
    const sel = ((this.state.fighterSelect + this.state.fighters.length) - 1) % this.state.fighters.length;
    this.setState({ fighterSelect: sel });
  }

  fighterNext() {
    const sel = (this.state.fighterSelect + 1) % this.state.fighters.length;
    this.setState({ fighterSelect: sel });
  }

  weaponPrev() {
    const sel = ((this.state.weaponSelect + this.state.weapons.length) - 1) % this.state.weapons.length;
    this.setState({ weaponSelect: sel });
  }

  weaponNext() {
    const sel = (this.state.weaponSelect + 1) % this.state.weapons.length;
    this.setState({ weaponSelect: sel });
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
            <CreatureSelect ref='fightRef' fighter={this.state.fighters[this.state.fighterSelect]} next={this.fighterNext} prev={this.fighterPrev} />
          </div>
          <div>
            <WeaponSelect ref='weaponRef' weapon={this.state.weapons[this.state.weaponSelect]} next={this.weaponNext} prev={this.weaponPrev} />
          </div>
          <div>
            <button onClick={this.startFight} >Fight!</button>
          </div>
        </div>
        <div style={{ display: fightDisplay }} >
          <div style={{ display: 'inline-block' }} >
            <h1>You</h1>
            <Fighter fighter={this.state.fighter} weapon={this.state.weapon} maxHealth={this.state.fighterMaxHealth} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h1>VS:</h1>
          </div>
          <div style={{ display: 'inline-block' }}>
            <h1>Opponent</h1>
            <Fighter fighter={this.state.opponent} weapon={this.state.opponentWeapon} maxHealth={this.state.opponentMaxHealth} />
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
