import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setMessage } from "../appState/actions";

export const getProductsThunk = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/products`);

    console.log(response.data);
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
  };
};

export const postProductThunk = (name, description, price, imageUrl) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    console.log(token);
    console.log(name, description, price, imageUrl);
    // axios post
    const response = await axios.post(
      `${apiUrl}/products`,
      {
        name: name,
        description: description,
        price,
        imageUrl
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("RESPONSE", response);
    dispatch(setMessage("success", true, response.data.message));
    dispatch({ type: "PRODUCT_ADDED", payload: response.data.product });
  };
};
