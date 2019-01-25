
import React, { Component } from 'react';
import test from '../../images/test.png'

class ThemeSwitcher extends Component {

  state = { theme: null }
  
  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }

  test = () => {
    console.log("hiya");
  }
  
  render() {
    
    const { theme } = this.state;
    const themeclassName = theme ? theme.toLowerCase() : 'secondary';
    
    return (
      
      <div classNameName="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      
        <span classNameName={`h1 mb-4 w-100 text-center text-${themeclassName}`}>{ theme || 'Path of Exile' }</span>
        
        <div classNameName="btn-group">
        
          <button  type="button" classNameName={`btn btn-${themeclassName} btn-lg`}>{ theme || 'Choose' } className</button>
          
          <button onClick={this.test} type="button" classNameName={`btn btn-${themeclassName} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span classNameName="sr-only">Toggle Theme Dropdown</span>
          </button>
          
          <div classNameName="dropdown-menu">
          
            <button classNameName="dropdown-item"  onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</button>
            <button classNameName="dropdown-item"  onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</button>
            <button classNameName="dropdown-item"  onClick={e => this.chooseTheme('Success', e)}>Success Theme</button>
            
            <div classNameName="dropdown-divider"></div>
            
            <button classNameName="dropdown-item"  onClick={this.resetTheme}>Default Theme</button>
          </div>
          
        </div>
        
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;