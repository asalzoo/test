import React, { Component} from 'react';
import {TContext} from "./ThemeContext";




class Btncontext extends Component{
    static contextType = TContext;

    render(){
        const{changeTheme}=this.context;

        return <div>
            <input onClick={changeTheme}  value="light" type="button"/>
            <input onClick={changeTheme}  value="dark" type="button"/>
            <input onClick={changeTheme}  value="darkRed" type="button"/>
            <input onClick={changeTheme}  value="purple" type="button"/>
        </div>
    }
}
export default Btncontext;