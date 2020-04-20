import {BUY_ICECREAM} from '../actions/actionTypes';

const initialState = {
    numOfIceCream: 20
}

const icecreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - action.payload
        }
        default: return state
    }
}

export default icecreamReducer;