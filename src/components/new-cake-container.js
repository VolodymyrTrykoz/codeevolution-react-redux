import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {buyIcecream} from '../redux/actions';

const NewCakeContainer = () => {
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();

    const handleSubmit = () => {                
        dispatch(buyIcecream(value))
    };

    const handleChange = (e) => {                
        setValue(e.target.value);
    };

    return (
        <div>
            <input type="text" name="cakes" onChange={handleChange}/>
            <button onClick={()=> handleSubmit()}>Buy {value} icecream</button>
        </div>
    )
}

export default NewCakeContainer;
