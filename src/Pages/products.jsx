import { useNavigate } from "react-router-dom";
import CardProduct from "../components/Fragments/CardProducts";
import ProductsLayout from "../components/Layouts/ProductsLayout";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product.services";

export default function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const handleClick = (id) => {
    const base64 = btoa(id);
    const link = `/dashboard/products/${base64}`;
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
          handleClick={() => handleClick(data?.title)}
        >
          <CardProduct.Header imageSrc={data?.image} />
          <CardProduct.Body title={data?.title} />
          <CardProduct.Footer price={data?.price} />
        </CardProduct>
      ))}
    </ProductsLayout>
  );
}
