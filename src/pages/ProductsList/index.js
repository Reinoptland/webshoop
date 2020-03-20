import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../store/products/actions";
import { selectProducts } from "../../store/products/selectors";

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  console.log(products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <div>
      PRODUCTLIST
      <div>
        {products.map(product => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <h2>PRICE €{product.price}</h2>
              <img src={product.imageUrl} />
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
