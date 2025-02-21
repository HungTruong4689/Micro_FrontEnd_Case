// import React from 'react'
import "tailwindcss/tailwind.css";

import Product from "./Product";
import { useGetProductsQuery } from "host/store";

// ✅ Define Product Type
interface ProductProps {
  id: number;
  title: string;
  price: number;
  image?: string;
  category?:string;
  description?:string;
  rating?:{
    rate:number;
    count:number;
  }
}

// ✅ ProductList Component
const ProductList: React.FC = () => {
  
  const { data: products, isLoading, error } = useGetProductsQuery<ProductProps[]>(); // Typed API response

  console.log("products",products)

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md">
      
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
        {products?.map((product:ProductProps) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            description={product.description}
            rating={product.rating}
           
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


