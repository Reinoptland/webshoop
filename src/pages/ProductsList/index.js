import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "../../store/products/actions";

export default function ProductsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return <div>PRODUCTLIST</div>;
}
