import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyIcecream} from '../redux/actions';

const HooksIcecreamContainer = () => {

    const icecream = useSelector(state => state.icecreamReducer.numOfIceCream);
    const dispatch = useDispatch();

    return (
        <>
            <h1>With hooks</h1>
            <h2>Number of icecream: {icecream}</h2>
            <button
                onClick={() => { dispatch(buyIcecream())}}
            >
                Buy an icecream
            </button>
        </>
    )
}

export default HooksIcecreamContainer;