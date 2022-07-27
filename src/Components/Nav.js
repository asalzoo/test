import React, { Component } from 'react';
import { TContext } from './ThemeContext';

class Nav extends Component {
    static contextType = TContext;

    render() {
        const {isLight, light, dark} = this.context;
        
        const theme  = isLight ? light : dark;
        
        return (
            <nav style={{ background: theme.item, color: theme.text}}>
                <div style={{ background: theme.bg, color: theme.text }}>
                    <ul>
                        <li style={{ background: theme.item }}>Home</li>
                        <li style={{ background: theme.item }}>Contact Us</li>
                        <li style={{ background: theme.item }}>About Us</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
 
export default Nav;