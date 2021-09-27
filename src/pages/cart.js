import React from 'react';
import Display from './display';
import Banner from '../components/banner';
import { removeFromCart_Action } from '../reduxBase/actions';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <Banner itemCount={this.props.itemsinCart} />
        <div className="page-label">Your Cart</div>

        <Display
          itemList={this.props.cartList}
          actionLabel={'Remove'}
          action={(id) => this.props.removeFromCart(id)}
          emptyContentMessage={'Please add items to the cart'}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    cartList: state.cartList,
    itemsinCart: state.itemsinCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => {
      dispatch(removeFromCart_Action(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
