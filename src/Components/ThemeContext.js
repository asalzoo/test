import React, { Component, createContext } from 'react';

export const TContext = createContext();

class ThemeContext extends Component {
    state = {
        theme:'',
        light: { text: '#555', item: '#ddd', bg: '#eee' },
        dark: { text: '#ddd', item: '#333', bg: '#555' },
        darkRed: { text : '#8b0000', item: '#F58D77', bg: '#fff' },
        purple: { text: '#7605FD', item: '#B380F0', bg: '#E8D8FA' }
    }

    changeTheme = (e) => {
        this.setState({theme: e.target.value})
    }

    render() { 
        return <div>
            <TContext.Provider value={{ ...this.state, changeTheme:this.changeTheme }}>
                {this.props.children}
            </TContext.Provider>            
        </div>;
    }
}
 
export default ThemeContext;
