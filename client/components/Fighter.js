/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

export default (props) => {
  let health = Math.round(props.fighter.health);
  if (props.fighter.health < 0) {
    health = 0;
  }
  const damageTaken = ((props.maxHealth - health) / props.maxHealth) * 100;
  const damageWidth = `${damageTaken}px`;
  const healthWidth = `${100 - damageTaken}px`;
  return (
    <div>
      <div style={{ width: healthWidth, height: '40px' }} className='remaining' ></div>
      <div style={{ width: damageWidth, height: '40px' }} className='damage' ></div>
      <div>
        Health: {health}
      </div>
      <div>
        <img height='150px' src={props.fighter.image} role="presentation" ></img>
      </div>
      <div>
        Weapon: <img height='150px' role="presentation" src={props.weapon.image} ></img>
      </div>
      <div>
        Name: {props.fighter.name}
      </div>
      <div>
        Weapon: {props.weapon.name}
      </div>
      <div>
        Record: Wins:{props.fighter.win} Losses:{props.fighter.loss}
      </div>
    </div>
  );
};
