import React from 'react';
import Display from './display';
import Banner from '../components/banner';
import { addToCart_Action } from '../reduxBase/actions';
import { connect } from 'react-redux';

class Products extends React.Component {
  render() {
    return (
      <div>
        <Banner itemCount={this.props.itemsinCart} />
        <div className="page-label">Purchase the books of choice</div>
        
        <Display
          itemList={this.props.productList}
          actionLabel={'Add to Cart'}
          action={(id) => this.props.addToCart(id)}
          emptyContentMessage={'You have purchased all the items!'}
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
    addToCart: (id) => {
      dispatch(addToCart_Action(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
