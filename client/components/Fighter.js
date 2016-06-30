/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

export default (props) => {
  let health = Math.round(props.health);
  if (props.health < 0) {
    health = 0;
  }
  const damageWidth = `${((props.maxHealth - health) / props.maxHealth) * 100}px`;
  const healthWidth = `${(health / props.maxHealth) * 100}px`;
  const width = `${(health / props.maxHealth) * 100}px`;
  return (
    <div>
      <div style={{ width: healthWidth, height: '40px' }} className='remaining' ></div>
      <div style={{ width: damageWidth, height: '40px' }} className='damage' ></div>
      <div>
        Health: {health}
      </div>
      <div>
        <img height='150px' src={props.image} ></img>
      </div>
      <div>
        Weapon: <img height='150px' src={props.weaponImage} ></img>
      </div>
      <div>
        Name: {props.name}
      </div>
      <div>
        Weapon: {props.weapon}
      </div>
      <div>
        Record: Wins:{props.win} Losses:{props.loss}
      </div>
    </div>
  );
};
