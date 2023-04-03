import React from 'react';
//Importation styles
import {styles} from '../styles'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
    
  render() {
    //Importation des props
    const copying = this.props.copying;
    const toggleTape = this.props.toggle
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat</h1>
        <input type='text' 
               value={this.props.value} 
               onChange={this.props.handleChange} />
        <img style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
      </div>
    );
  };
}