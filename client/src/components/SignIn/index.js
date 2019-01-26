
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
      
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      
        <span className={`h1 mb-4 w-100 text-center text-${themeclassName}`}>{ theme || 'Path of Exile' }</span>
        
        <div className="btn-group">
        
          <button  type="button" className={`btn btn-${themeclassName} btn-lg`}>{ theme || 'Choose' } className</button>
          
          <button onClick={this.test} type="button" className={`btn btn-${themeclassName} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Theme Dropdown</span>
          </button>
          
          <div className="dropdown-menu">
          
            <button className="dropdown-item"  onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</button>
            <button className="dropdown-item"  onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</button>
            <button className="dropdown-item"  onClick={e => this.chooseTheme('Success', e)}>Success Theme</button>
            
            <div className="dropdown-divider"></div>
            
            <button className="dropdown-item"  onClick={this.resetTheme}>Default Theme</button>
          </div>
          
        </div>
        
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;