// import React from 'react'
import "tailwindcss/tailwind.css";

interface Product {
  id: number;
  title: string;
  price: number;
}


  
  



import { useDispatch } from "react-redux";


import { Button } from "antd";

import { useGetProductsQuery, addItem, AppDispatch } from "host/store";

// ✅ Define Product Type
interface Product {
  id: number;
  title: string;
  price: number;
  image?: string; // Optional image field (depends on API)
}

// ✅ ProductList Component
const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch
  const { data: products, isLoading, error } = useGetProductsQuery<Product[]>(); // Typed API response

  console.log("products",products)

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div>
      <h2>Product List</h2>
      {products?.map((product:Product) => (
        <div key={product.id}>
          <p>{product.title} - ${product.price.toFixed(2)}</p>
          <Button type="primary" onClick={() => dispatch(addItem(product))}>
            Add to Basket
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;


