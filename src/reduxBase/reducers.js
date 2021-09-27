const products = [
  {
    id: 1,
    name: 'In Search of Lost Time',
    author: 'Marcel Proust',
    price: 550,
  },
  { id: 2, name: 'Ulysses', author: 'James Joyce', price: 240 },
  {
    id: 3,
    name: 'Don Quixote',
    author: 'Miguel de Cervantes',
    price: 320,
  },
  {
    id: 4,
    name: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    price: 180,
  },
  { id: 5, name: 'The Great Gats', author: 'F', price: 630 },
];
const initialState = { productList: products, cartList: [], itemsinCart: 0 };
const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        productList: state.productList.filter((x) => x.id != action.payload),
      };
      state.cartList.push(products.find((x) => x.id == action.payload));
      state.itemsinCart = state.cartList?.length;
      //console.log('Item Added', action.payload, state);
      break;
    case 'REMOVE':
      state = {
        ...state,
        cartList: state.cartList.filter((x) => x.id != action.payload),
      };
      state.productList.push(products.find((x) => x.id == action.payload));
      state.itemsinCart = state.cartList?.length;
      //console.log('Item Removed', action.payload, state);
      break;
  }
  return state;
};

export default shoppingReducer;
