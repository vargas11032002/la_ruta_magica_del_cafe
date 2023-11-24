
import AcerNitro5Image from "./assets/images/balcon.jpg";
import AsusROGStrixG17Image from "./assets/images/brisas.jpg";
import AsusROGZephyrusM16Image from "./assets/images/joaquin.jpg";
import LenovoIdeapadGaming3Image from "./assets/images/mano.jpg";
import MsiGF63ThinImage from "./assets/images/morra.jpg";
import RazerBlade17Image from "./assets/images/palestina.jpg";
import totoy from "./assets/images/totoy.jpg";
import lomachata from "./assets/images/lomachata.jpg";
import florida from "./assets/images/florida.jpg";
import samadhi from "./assets/images/samadhi.jpg";
import bonanza from "./assets/images/bonanza.jpeg";
import alicia from "./assets/images/alicia.jpg";
import daniela from "./assets/images/daniela.jpg";
import primavera from "./assets/images/primavera.jpeg";
import zuluaga from "./assets/images/zuluaga.jpg";
const arrayProducts = [
  {
    id: "price_1O5HNaFqzLAtNtxMfPdL1adn",
    name: "Balcon del huila",
    price: 5000,
    image: AcerNitro5Image,
  },
  {
    id: "price_1O5IQSFqzLAtNtxMHh28bO9T",
    name: "brisas de mirthayu",
    price: 5000,
    image: AsusROGStrixG17Image,
  },
  {
    id: "price_1O5IRkFqzLAtNtxMlQ63WLNf",
    name: "san hoaquin hotel",
    price: 10000,
    image: AsusROGZephyrusM16Image,
  },
  {
    id: "price_1O5HSuFqzLAtNtxMWtPwd7Go",
    name: "mano de gigante ",
    price: 10000,
    image: LenovoIdeapadGaming3Image,
  },
  {
    id: "price_1O5IN3FqzLAtNtxM4N3kXrLD",
    name: "la morra",
    price: 5000,
    image: MsiGF63ThinImage,
  },
  {
    id: "price_1O5ISyFqzLAtNtxMXAZ7xKYF",
    name: "finca la palestina",
    price: 10000,
    image: RazerBlade17Image,
  },
  {
    id: "price_1O60vYFqzLAtNtxMQQ7CC3NS",
    name: "mirador le totoy",
    price: 10000,
    image: totoy,
  },
  {
    id: "price_1O60wIFqzLAtNtxMtS820Fgr",
    name: "finca Hotel San luis",
    price: 5000,
    image: lomachata,
  },
  {
    id: "price_1O60wvFqzLAtNtxM4pKZQb0F",
    name: "finca la florida",
    price: 10000,
    image: florida,
  },
  {
    id: "price_1O610wFqzLAtNtxM2fWQM6aj",
    name: "hostal campestre samadhi",
    price: 30000,
    image: samadhi,
  },
  {
    id: "price_1O611bFqzLAtNtxMfNwmzItt",
    name: "finca la bonanza",
    price: 5000,
    image: bonanza,
  },
  {
    id: "price_1O6170FqzLAtNtxMUCJncZ6c",
    name: "finca la alicia",
    price: 35000,
    image: alicia,
  },

  {
    id: "price_1O617eFqzLAtNtxMSE82tjXf",
    name: "finca villa daniela",
    price: 40000,
    image: daniela,
  },
    {
    id: "price_1O618KFqzLAtNtxM5g5P8IH8",
    name: "finca la primavera",
    price: 10000,
    image: primavera,
  },
    {
    id: "price_1O618yFqzLAtNtxMegiEXcVb",
    name: "piedra del indio ",
    price: 5000,
    image: zuluaga,
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
