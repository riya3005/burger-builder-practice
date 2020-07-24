import React, { Component } from 'react';
import Burger from '../Burger/Burger';
import BurgerControls from '../BurgerControls/BurgerControls';


export class BurgerBuild extends Component {
    //state = this.props.state
    
    render() {
        
        return (
            <>
                <Burger/>
                <BurgerControls />
                
            </>
        );
    }
}


export default BurgerBuild;
