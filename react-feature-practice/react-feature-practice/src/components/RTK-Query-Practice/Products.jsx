import React from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../features/api/apiSlice";

const Products = () => {
  const { data: allProductsData } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iphone");

  console.log(allProductsData);
  console.log(singleProductData);
  return <div>Products</div>;
};

export default Products;
