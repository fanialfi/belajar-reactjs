import CardProduct from "../components/fragments/cardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/assets/images/sepatu.jpeg"/>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore numquam labore enim dolores maxime voluptatibus, voluptatum dicta quasi quod totam eum ipsam ratione velit magnam cumque necessitatibus explicabo repellendus consectetur?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000"/>
      </CardProduct>
    </div>
  )
}

export  default ProductPage;