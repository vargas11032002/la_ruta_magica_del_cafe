import { Cart } from "../Cart";
import { useContext } from "react";
import { getProductData } from "../Products";
import { getProductDataa } from "../articulos"; // Add the import for articulos

function CartProduct(props) {
  const cart = useContext(Cart);
  const id = props.id;
  const quantity = props.quantity;

  // Use getProductData or getProductDataa based on the source of the product
  const productData = getProductData(id) || getProductDataa(id);

  return (
    <div>
      <h5 className="" style={{ color: "purple" }}>
        {productData.name}
      </h5>
      <h6>cantidad: {quantity}</h6>
      <p>
        $ {(quantity * productData.price).toFixed(2).toString().replace(".", ",").replace(/,00/, "")}
      </p>
      <button className="btn btn-warning" onClick={() => cart.deleteItem(id)}>
        Remover reserva
      </button>
      <hr />
    </div>
  );
}

export default CartProduct;
