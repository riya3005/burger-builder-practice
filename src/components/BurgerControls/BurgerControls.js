import React from 'react'
import './BurgerControlCSS/BurgerControl.css'
import BuildControl from './BuildControl'
import './BurgerControlCSS/OrderButton.css'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

const BurgerControls = (props) => {
    const ctr = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' }
    ];


    return (

        <div className="BurgerControl">
            <strong> <p> Current Price : {props.totalPricing.toFixed(2)}</p> </strong>
            {
                ctr.map(control => {
                    return <BuildControl
                        key={control.label}
                        label={control.label}
                        ctrType={control.type}
                        count={props.ingredients[control.type]}
                    />
                })
            }
            <button disabled={!props.purchasable} onClick={()=> props.history.push('/OrderSummary')} className="OrderButton"> Proceed </button>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        purchasable: state.purchasable,
        totalPricing : state.totalPricing
    }
}


export default connect(mapStateToProps, null)(withRouter(BurgerControls))
