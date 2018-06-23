import React, { Component } from 'react';

class Card extends Component {
  render (props) {
    const { id, username, name, email } = this.props;
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
        <h3>{username}</h3>
        <img src={`https://robohash.org/${id}.png?set=set1&size=150x150`} alt='Robot' />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;