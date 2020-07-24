const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    totalPricing: 4,
    purchasable: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_PURCHASABLE':
            {
                return {
                    ...state,
                    purchasable: state.totalPricing > 4
                }
            }
        case 'ADD_INGREDIENTS':
            {
            
                return {
                    ...state,
                    ingredients: action.updatedIng,
                    totalPricing: action.updatedPricing
                }
            }
        case 'REMOVE_INGREDIENTS':
            {
               
                return {
                    ...state,
                    ingredients: action.updatedIng,
                    totalPricing: action.updatedPricing

                }
            }
        case 'RESET_STATE':
            {
                return initialState
            }
    }
    return state

};

export default reducer;