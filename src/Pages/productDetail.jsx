import { useEffect } from "react";
import { useParams } from "react-router-dom";
import dataDumy from "/src/assets/data.json";
import { useState } from "react";
import ProductDetailLayout from "../components/Layouts/ProductDetailLayout";
import CardProductDetail from "../components/Fragments/CardProductDetail";
import ProductImageHeader from "../components/Elements/ProductImageHeader";
import ProductBody from "../components/Elements/ProductBody";

export default function ProductDetailPage() {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState(undefined);
  const handleOnClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((elm) => elm?.id == productDetail?.id);

    if (existingProductIndex !== -1) {
      // kalau produk sudah ada di cart, maka tambahkan quantity
      cart[existingProductIndex].qty += 1;
    } else {
      // kalau belum ada di cart, tambahin product baru ke cart
      const data = {
        id: productDetail?.id,
        qty: 1,
      };
      cart.push(data);
    }

    // update localstorage dengan cart
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    setProductDetail(dataDumy.filter((item) => item.id == id)[0]);
  }, [id]);

  return (
    <ProductDetailLayout>
      <CardProductDetail>
        <ProductImageHeader imageUrl={productDetail?.image} />
        <ProductBody>
          <ProductBody.title price={productDetail?.price} title={productDetail?.title} />
          <ProductBody.desc>{productDetail?.description}</ProductBody.desc>
          <ProductBody.footer btnOnClick={handleOnClick} />
        </ProductBody>
      </CardProductDetail>
    </ProductDetailLayout>
  );
}
