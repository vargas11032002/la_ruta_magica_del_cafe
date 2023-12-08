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
    name: "Balcon del Huila",
    description: "Disfruta de la hermosa vista desde el Balcón del Huila. Un lugar tranquilo y acogedor para tu estadía.",
    price: 5000,
    image: AcerNitro5Image,
  },
  {
    id: "price_1O5IQSFqzLAtNtxMHh28bO9T",
    name: "Brisas de Mirthayu",
    description: "Sumérgete en la serenidad de las Brisas de Mirthayu. Un destino perfecto para relajarte y disfrutar de la naturaleza.",
    price: 5000,
    image: AsusROGStrixG17Image,
  },
  {
    id: "price_1O5IRkFqzLAtNtxMlQ63WLNf",
    name: "San Joaquin Hotel",
    description: "Experimenta la elegancia y comodidad en San Joaquin Hotel. Tu hogar lejos de casa con servicios de alta calidad.",
    price: 10000,
    image: AsusROGZephyrusM16Image,
  },
  {
    id: "price_1O5HSuFqzLAtNtxMWtPwd7Go",
    name: "Mano de Gigante",
    description: "Descubre la majestuosidad de la naturaleza en la Mano de Gigante. Un lugar único para conectarte con el entorno natural.",
    price: 10000,
    image: LenovoIdeapadGaming3Image,
  },
  {
    id: "price_1O5IN3FqzLAtNtxM4N3kXrLD",
    name: "La Morra",
    description: "Visita La Morra y experimenta la tranquilidad del campo. Un lugar perfecto para escapar del bullicio de la ciudad.",
    price: 5000,
    image: MsiGF63ThinImage,
  },
  {
    id: "price_1O5ISyFqzLAtNtxMXAZ7xKYF",
    name: "Finca La Palestina",
    description: "Vive una experiencia única en Finca La Palestina. Disfruta de la paz y la belleza de la naturaleza.",
    price: 10000,
    image: RazerBlade17Image,
  },
  {
    id: "price_1O60vYFqzLAtNtxMQQ7CC3NS",
    name: "Mirador Le Totoy",
    description: "Contempla paisajes impresionantes desde el Mirador Le Totoy. Un lugar perfecto para relajarte y disfrutar de la vista.",
    price: 10000,
    image: totoy,
  },
  {
    id: "price_1O60wIFqzLAtNtxMtS820Fgr",
    name: "Finca Hotel San Luis",
    description: "Experimenta la comodidad y la hospitalidad en Finca Hotel San Luis. Un destino ideal para tu escapada.",
    price: 5000,
    image: lomachata,
  },
  {
    id: "price_1O60wvFqzLAtNtxM4pKZQb0F",
    name: "Finca La Florida",
    description: "Descubre la belleza natural en Finca La Florida. Un lugar perfecto para disfrutar de la paz y la serenidad.",
    price: 10000,
    image: florida,
  },
  {
    id: "price_1OL4ktFqzLAtNtxMC5FiFS41",
    name: "Hostal Campestre Samadhi",
    description: "Vive una experiencia única en Hostal Campestre Samadhi. Disfruta de la tranquilidad y la conexión con la naturaleza.",
    price: 30000,
    image: samadhi,
  },
  {
    id: "price_1O611bFqzLAtNtxMfNwmzItt",
    name: "Finca La Bonanza",
    description: "Experimenta la vida en el campo en Finca La Bonanza. Un lugar encantador para desconectar y disfrutar del entorno.",
    price: 5000,
    image: bonanza,
  },
  {
    id: "price_1O6170FqzLAtNtxMUCJncZ6c",
    name: "Finca La Alicia",
    description: "Descansa y relájate en Finca La Alicia. Disfruta de la comodidad y la belleza de este acogedor lugar.",
    price: 35000,
    image: alicia,
  },
  {
    id: "price_1O617eFqzLAtNtxMSE82tjXf",
    name: "Finca Villa Daniela",
    description: "Vive momentos inolvidables en Finca Villa Daniela. Un destino encantador para tu escapada especial.",
    price: 40000,
    image: daniela,
  },
  {
    id: "price_1O618KFqzLAtNtxM5g5P8IH8",
    name: "Finca La Primavera",
    description: "Disfruta de la tranquilidad y la belleza natural en Finca La Primavera. El lugar perfecto para descansar.",
    price: 10000,
    image: primavera,
  },
  {
    id: "price_1O618yFqzLAtNtxMegiEXcVb",
    name: "Piedra del Indio",
    description: "Explora la mística Piedra del Indio y conecta con la energía de la naturaleza. Un lugar lleno de historia y belleza.",
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

