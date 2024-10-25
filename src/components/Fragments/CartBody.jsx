import PropTypes from "prop-types";
import ButtonAdjustment from "../Elements/ButtonAdjustment";
import TotalAmount from "../Elements/TotalAmount";

function CardCart({
  index,
  products,
  product,
  handleDecrement,
  handleIncrement,
}) {
  return (
    <div
      id={product?.id}
      className={`p-4 m-4 bg-slate-300 flex justify-stretch ${
        index === 0
          ? "rounded-t-lg"
          : "" || index === products.length - 1
          ? "rounded-b-lg"
          : ""
      }`}
    >
      <div className="w-20 h-16 overflow-hidden rounded-md m-2">
        <img src={product?.image} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col p-4 basis-3/5">
        <h4>{product?.title}</h4>
        <p>in stock</p>
      </div>
      <div className="p-2 basis-1/5 flex flex-col items-center gap-y-2">
        <p>
          {product?.price?.toLocaleString("id-ID", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <div className="flex items-center justify-around gap-x-4 p-1 border-white border-2 rounded-md">
          <ButtonAdjustment onClick={handleDecrement} id={product?.id}>
            -
          </ButtonAdjustment>
          <p>{product?.qty}</p>
          <ButtonAdjustment onClick={handleIncrement} id={product?.id}>
            +
          </ButtonAdjustment>
        </div>
      </div>
    </div>
  );
}

CardCart.propTypes = {
  index: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.object),
  product: PropTypes.object,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
};

function CartSummary({ products }) {
  return (
    <div className="basis-1/4 flex-none p-4 mt-6 rounded-lg bg-slate-300">
      <h3>Ringkasan Belanja</h3>
      <div>
        <TotalAmount data={products} />
      </div>
    </div>
  );
}
CartSummary.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default function CartBody({ products, children }) {
  return (
    <div className="flex items-start justify-center gap-8 p-4">
      <div className="basis-3/4  p-2 rounded-lg">{children}</div>
      <CartSummary products={products} />
    </div>
  );
}
CartBody.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
};

CartBody.cart = CardCart;
