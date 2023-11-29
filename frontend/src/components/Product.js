import { Cart } from "../Cart";
import { useContext } from "react";
import "./tstile.css"

function Product(props) {
  const { product } = props;
  const cart = useContext(Cart);
  const quantity = cart.getQuantity(product.id);

  return (
    <div className="card mb-3 h-100" id="tarjet">
      <img
        src={product.image}
        className="card-img-top img-fluid w-100 h-50"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">$ {product.price}</p>
        {quantity > 0 ? (
          <div className="row">
            <div className="row m-auto">
              <div className="col-6">: {quantity}</div>
              <div className="col-6">
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => cart.addItem(product.id)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => cart.removeItem(product.id)}
                >
                  -
                </button>
              </div>
              <button
                type="button"
                className="btn btn-danger w-75 mt-4 m-auto"
                onClick={() => cart.deleteItem(product.id)}
              >
                Remover reserva
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => cart.addItem(product.id)}
          >
            Reservar
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
