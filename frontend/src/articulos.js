
import Cafe from "./assets/images/cafe.jpg";
import Arequipe from "./assets/images/arequipe.jpg";
import Vinos from "./assets/images/vino.jpg";

const arrayProducts = [
  {
    id: "price_1O5HNaFqzLAtNtxMfPdL1adn",
    name: "Cafe artesanal ",
    price: 5000,
    image: Cafe,
  },
  {
    id: "price_1O5IQSFqzLAtNtxMHh28bO9T",
    name: "arequipe",
    price: 5000,
    image: Arequipe,
  },
  {
    id: "price_1O5IRkFqzLAtNtxMlQ63WLNf",
    name: "vinos de cafe",
    price: 10000,
    image: Vinos,
  },

];

function getProductData(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { arrayProducts, getProductData };
