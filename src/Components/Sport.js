import React, { Component } from 'react';
import { TContext } from './ThemeContext';
import Btncontext from "./Btncontext";

class Sport extends Component {
    static contextType = TContext;
    
    clickHandler = () => {
        alert('Hello World');
    } 
    
    render() { 
        const {theme, light, dark, darkRed, purple} = this.context;

        var currentTheme = '';

        switch(theme){
            case 'light':
                currentTheme = light;
                break;
            case 'dark': 
                currentTheme = dark;
                break;
            case 'darkRed': 
                currentTheme = darkRed;
                break;
            case 'purple': 
                currentTheme = purple;
                break;
        }
        return(
            <div  style={{ background: currentTheme.item, color: currentTheme.text }} className="book-list">

                <ul>
                    <li>VolleyBall</li>
                    <li>Body Bulding</li>
                    <li>Pilates</li>
                    <li>Tenis</li>
                </ul>
            </div>
        )
    }
}
 
export default Sport;