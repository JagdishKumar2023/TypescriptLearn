import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

type Product = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

type Products = Product[];

const Products = () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";

  const [products, setProducts] = useState<Products>([]);

  const fetchProducts = async () => {
    const products = await axios.get(url);
    const data = products.data;
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products &&
        products.map((product: Product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
    </div>
  );
};

export default Products;
