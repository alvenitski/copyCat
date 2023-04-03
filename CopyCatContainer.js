import React from 'react';
import ReactDOM from 'react-dom';
import {CopyCat} from '../components/CopyCat'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);
    this.state = { 
      copying: true,
      userInput: ''
    };
    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  //Creation eventHandler pour input
  handleChange(e){
    this.setState({userInput: e.target.value})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.userInput;
    const handleChange = this.handleChange;
    
    return (
      <CopyCat copying={copying}
               toggle={toggleTape}
               value={value}
               handleChange={handleChange}
      />
    );
  };
}

ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));