import CardProduct from "../components/Fragments/CardProducts";
import ProductsLayout from "../components/Layouts/ProductsLayout";
import dataDumy from "/src/assets/data.json";

export default function ProductsPage() {
  return (
    <ProductsLayout>
      {dataDumy.map((data) => (
        <CardProduct key={data?.id}>
          <CardProduct.Header imageSrc={data?.image} />
          <CardProduct.Body title={data?.title} />
          <CardProduct.Footer price={data?.price} />
        </CardProduct>
      ))}
    </ProductsLayout>
  );
}
