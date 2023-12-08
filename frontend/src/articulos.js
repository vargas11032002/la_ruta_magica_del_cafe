import Cafe from "./assets/images/cafe.jpg";
import Arequipe from "./assets/images/arequipe.jpg";
import Vinos from "./assets/images/vino.jpg";

const arrayProductss = [
  {
    id: "price_1OL4i6FqzLAtNtxMydPC8u3g",
    name: "Cafe artesanal",
    description: "Disfruta de nuestro delicioso café artesanal, cuidadosamente seleccionado y preparado para ofrecerte una experiencia única.",
    price: 5000,
    image: Cafe,
  },
  {
    id: "price_1OL4k1FqzLAtNtxMNKgbtOdh",
    name: "Arequipe",
    description: "Prueba nuestro arequipe casero, hecho con ingredientes de alta calidad que le dan un sabor irresistible.",
    price: 5000,
    image: Arequipe,
  },
  {
    id: "price_1OL4ktFqzLAtNtxMC5FiFS41",
    name: "Vinos de café",
    description: "Descubre la fusión perfecta entre el aroma del café y la exquisitez de un buen vino. Nuestros vinos de café te sorprenderán.",
    price: 10000,
    image: Vinos,
  },
];

function getProductDataa(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { arrayProductss, getProductDataa };
