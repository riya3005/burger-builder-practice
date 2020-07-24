import React, { Component } from 'react'
import './OrderSummaryCSS/OrderSummary.css'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class OrderSummary extends Component {
    orderPlaced = () => {
        this.props.resetFunc()
        this.props.history.replace('/')
    }
    render() {
        return (
            <div className="OrderSummary">
                 <strong><p> SUMMARY </p> </strong> 
                 <div>
                     Your Order
                     
                 </div>
                 <div>
                     <p>Item Total : {this.props.totalPricing}</p>
                     <p>Taxes : {(0.2 * this.props.totalPricing).toFixed(2)}</p>
                     <p>Amount to be paid : {(this.props.totalPricing + 0.2 * this.props.totalPricing).toFixed(2)}</p>
                 </div>
                <button onClick={this.orderPlaced}> Pay Now </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalPricing : state.totalPricing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetFunc : () => dispatch({
            type: 'RESET_STATE'
        })     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderSummary))
