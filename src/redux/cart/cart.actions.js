import CartActionTypes from './cart.types';
//The Action is a FUNCTION (not an object) that always has a type and sometimes has a payload. 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM, 
    payload: item
})