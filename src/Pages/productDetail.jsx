import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailLayout from "../components/Layouts/ProductDetailLayout";
import CardProductDetail from "../components/Fragments/CardProductDetail";
import ProductImageHeader from "../components/Elements/ProductImageHeader";
import ProductBody from "../components/Elements/ProductBody";
import { getProduct } from "../services/product.services";

export default function ProductDetailPage() {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState(undefined);
  const handleOnClick = () => {
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      console.log(
        `error saat memparsing JSON string\nerror message : ${error}`
      );
    }
    const existingProductIndex = cart.findIndex(
      (elm) => elm?.id == productDetail?.id
    );

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
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error(`error saat memparsing json ke string\nmessage : ${error}`);
      localStorage.setItem("cart", "[]");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getProduct(id);
      setProductDetail(result);
    };
    fetchProduct();
  }, [id]);

  return (
    <ProductDetailLayout>
      <CardProductDetail>
        <ProductImageHeader imageUrl={productDetail?.image} />
        <ProductBody>
          <ProductBody.title
            price={productDetail?.price}
            title={productDetail?.title}
          />
          <ProductBody.desc>{productDetail?.description}</ProductBody.desc>
          <ProductBody.footer btnOnClick={handleOnClick} />
        </ProductBody>
      </CardProductDetail>
    </ProductDetailLayout>
  );
}
