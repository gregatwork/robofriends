import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import Card from './Card';
import { robots } from './robots';

ReactDOM.render(
  <div>
    <Card
      id={robots[1].id}
      url={robots[1].url}
      name={robots[1].name}
      username={robots[1].username}
      email={robots[1].email}
    />
    <Card
      id={robots[2].id}
      url={robots[2].url}
      name={robots[2].name}
      username={robots[2].username}
      email={robots[2].email}
    />
    <Card
      id={robots[3].id}
      url={robots[3].url}
      name={robots[3].name}
      username={robots[3].username}
      email={robots[3].email}
    />
  </div>, 
  document.getElementById('root'));
