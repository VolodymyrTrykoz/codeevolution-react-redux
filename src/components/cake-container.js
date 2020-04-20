import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux/actions';


const CakeContainer = ({cakes, buyCake}) => {
  return (
    <div>
      <h2>Number of cakes: {cakes}</h2>
      <button
        onClick={() => buyCake()}
      >
        Buy a cake
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {   
  return {
    cakes: state.cakeReducer.numOfCakes
  }
}  

export default connect(mapStateToProps, {buyCake})(CakeContainer);
