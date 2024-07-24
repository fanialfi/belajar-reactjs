import CardProduct from "../components/Fragments/CardProducts";
import ProductsLayout from "../components/Layouts/ProductsLayout";

export default function ProductsPage() {
  return (
    <ProductsLayout>
      <CardProduct>
        <CardProduct.Header imageSrc="/images/laptop.webp" />
        <CardProduct.Body>
          <CardProduct.Body.Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto.
          </CardProduct.Body.Title>
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header imageSrc="/images/laptop.webp" />
        <CardProduct.Body>
          <CardProduct.Body.Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, architecto.
          </CardProduct.Body.Title>
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </ProductsLayout>
  );
}
