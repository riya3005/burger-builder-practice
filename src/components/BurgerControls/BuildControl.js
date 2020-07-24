import './BurgerControlCSS/BuildControl.css'
import React, { Component } from 'react'
import {connect} from 'react-redux'

const INGREDIENTS_PRICING = {
    salad: 0.6,
    cheese: 0.7,
    meat: 1.3,
    bacon: 0.9
  
  }

class BuildControl extends Component {


      addIngredients = (type) => {
        //console.log('lalalal' , type)
        const oldVIngalue = this.props.ingredients[type];

        const updatedIng = {
            ...this.props.ingredients
        };
        const newIngValue = oldVIngalue + 1;
        updatedIng[type] = newIngValue;

        const oldPrice = this.props.totalPricing;
        const updatedPricing = oldPrice + INGREDIENTS_PRICING[type];
        //Dispatch action - 'ADD_INGREDIENTS'
        this.props.added(updatedIng, updatedPricing);
        this.props.isPurchasable();
      }
    
      subtractIngredients = (type) => {
        //Dispatch action - 'REMOVE_INGREDIENTS'
        const oldVIngalue = this.props.ingredients[type];

        const updatedIng = {
            ...this.props.ingredients
        };
        const newIngValue = oldVIngalue - 1;
        updatedIng[type] = newIngValue;

        const oldPrice = this.props.totalPricing;
        const updatedPricing = oldPrice - INGREDIENTS_PRICING[type];
        //Dispatch action - 'ADD_INGREDIENTS'
        this.props.subtracted(updatedIng, updatedPricing);
        this.props.isPurchasable();
      }


    render() {
        return (
            <div className='BuildControl'>
                <div className='Label'> {this.props.label} </div>
                <button className='BuildButton.Less' disabled={this.props.count === 0} onClick={() => this.subtractIngredients(this.props.ctrType)}> - </button>
                <div className='Count'> {this.props.count} </div>
                <button className='BuildButton.More' onClick={() => this.addIngredients(this.props.ctrType)}> + </button>
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

const mapDispatchToProps = dispatch => {
    return {
        isPurchasable : () => dispatch({type: 'IS_PURCHASABLE'}),
        added: (updatedIng, updatedPricing ) => dispatch({type:'ADD_INGREDIENTS', updatedIng, updatedPricing}),
        subtracted: (updatedIng, updatedPricing ) => dispatch({type:'REMOVE_INGREDIENTS', updatedIng, updatedPricing})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuildControl)

