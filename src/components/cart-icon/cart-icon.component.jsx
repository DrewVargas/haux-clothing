import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from './../../redux/cart/cart.actions';
import {
  selectCatItems,
  selectCartItemsCount
} from './../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
