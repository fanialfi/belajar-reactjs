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
          <ProductBody.footer />
        </ProductBody>
      </CardProductDetail>
    </ProductDetailLayout>
  );
}
