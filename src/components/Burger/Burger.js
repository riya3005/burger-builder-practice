import React, { Component } from 'react';
import './BurgerCSS/Burger.css';
import BurgerIngredients from './BurgerIngredients';
import {connect} from 'react-redux'

class Burger extends Component {
    // ingredients = Object.keys(this.props.ingredients).map(ingredient => {
    //     let count = this.props.ingredients[ingredient];
    //     while(count > 0)
    // });


    componentDidUpdate(prevProps) {
        if (prevProps.ingredients.salad !== this.props.ingredients.salad
            || prevProps.ingredients.meat !== this.props.ingredients.meat
            || prevProps.ingredients.cheese !== this.props.ingredients.cheese
            || prevProps.ingredients.bacon !== this.props.ingredients.bacon) { this.x(); }
    }

    componentDidMount() {
        //console.log('mount', ingredients)
        this.x();
    }

    state = {
        ing: []
    }

    x = () => {
        const ingTemp = [];
        for (let ingredient in this.props.ingredients) {
            let count = this.props.ingredients[ingredient];
            while (count > 0) {
                ingTemp.push(ingredient);
                count--;
            }
        }
        this.setState({
            ing: ingTemp
        });
    }


    render() {

        return (
            <div className="Burger">
                <BurgerIngredients type="bread-top" />
                {
                    this.state.ing.length !== 0
                        ? this.state.ing.map((ingredient, index) => {
                            return <BurgerIngredients key={index} type={ingredient} />
                        })
                        : <div> Please add some ingredients! </div>
                }
                <BurgerIngredients type="bread-bottom" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        purchasable: state.purchasable,
        totalPricing : state.totalPricing
    }
}

export default connect(mapStateToProps, null)(Burger);

// const Burger = (props) => {
//     console.log(props.ingredients)
//     return (
//         <div>

//         </div>
//     )
// }

// export default Burger;