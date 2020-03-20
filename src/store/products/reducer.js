const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return [...state, ...action.payload];

    case "PRODUCT_ADDED":
      return [...state, action.payload];

    default:
      return state;
  }
};
