import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ModalExample from "./components/ModalExample";
const infoCards = [
  {
    id:1,
    imgSrc: "/paraguay.jpg",
    altSrc: "Paraguay",
    texto: "Paraguay es un país sin litoral que se encuentra entre Argentina, Brasil y Bolivia, con grandes extensiones de pantanos, bosques subtropicales y chaco, extensiones de naturaleza que abarcan sabanas y matorrales."
  },
  {
    id:2,
    imgSrc: "/brasil.jpg",
    altSrc: "Brasil",
    texto: "Brasil es el país más grande de América del Sur, conocido por su vibrante cultura, su jungla amazónica, las impresionantes Cataratas del Iguazú y el Carnaval de Río, siendo una potencia en fútbol."
  },
  {
    id:3,
    imgSrc: "/Argentina.jpg",
    altSrc: "Argentina",
    texto: "Argentina es un país ubicado en el sur de América del Sur, famoso por su diversidad geográfica, desde las montañas de los Andes hasta las vastas pampas, y por su rica cultura que incluye el tango, el fútbol y la gastronomía."
  }
];

export default function Home() {

  return (
    <div>
      <Navbar></Navbar>
      <ModalExample></ModalExample>
      <div className="container">
        <div className='row'>
          {infoCards.map((infoCard) =>
            <div className='col-lg-4 col-md-6 col-sm-12' key={infoCard.altSrc}>
              <Card 
                imgSrc={infoCard.imgSrc}
                altSrc={infoCard.altSrc}
                text={infoCard.texto}
                title={"Viaja a " + infoCard.altSrc}
                button="Más información"
              ></Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
