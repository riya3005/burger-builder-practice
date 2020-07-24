import classes from './BurgerCSS/BurgerIngredients.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
    //console.log("I am here");
    let ingredient = null;
    switch (props.type) {
        case ('bread-bottom'):
            //console.log("I am bread bottom");
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            //console.log("I am bread top");
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case ('meat'):
            //console.log("I am meat");
            ingredient = <div className={classes.Meat}></div>
            break;
        case ('cheese'):
            //console.log("I am cheese");
            ingredient = <div className={classes.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;

        default:
            ingredient = null;
    }
    return ingredient;
};

BurgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngredients;