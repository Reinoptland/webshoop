import { apiUrl } from "../../config/constants";
import axios from "axios";

export const getProductsThunk = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/products`);

    console.log(response.data);
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
  };
};