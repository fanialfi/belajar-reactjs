import { useNavigate } from "react-router-dom";
import CardProduct from "../components/Fragments/CardProducts";
import ProductsLayout from "../components/Layouts/ProductsLayout";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product.services";

export default function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const handleClick = (id) => {
    const link = `/dashboard/products/${id}`;
    navigate(link);
  };

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <ProductsLayout>
      {products.map((data) => (
        <CardProduct
          key={data?.id}
          handleClick={() => handleClick(data?.id)}
        >
          <CardProduct.Header imageSrc={data?.image} />
          <CardProduct.Body title={data?.title} />
          <CardProduct.Footer price={data?.price} />
        </CardProduct>
      ))}
    </ProductsLayout>
  );
}
