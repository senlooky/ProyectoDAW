import Imagenes from "../assets/Imagenes";
import { Titulo, Populares, Autores } from "../component/Homelg";
import {Container, Row, Col} from 'react-bootstrap'
import Navegation from "../component/Navegation"


export default function HomePage() {
  return (
    <>
    <Navegation/>
        <Container>
      <Titulo title="Libros Populares" />
      <Row>
        <Col>   
      <Populares
        imagen={Imagenes.img4}
        titulo="El castillo de Otranto"
        resumen="El castillo de Otranto, cuya acción se desarrolla en la Italia medieval, narra la historia del tirano Manfred, cuya estirpe arrastra una maldición desde que su abuelo usurpara el poder del castillo a sus legítimos poseedores."
      /></Col>
      <Col>
      <Populares
        imagen={Imagenes.img2}
        titulo="La Maquina del Tiempo"
        resumen="En un viaje experimental llega al año 802.701 y encuentra la tierra habitada por los Eloi, pacíficos y ociosos. El Viajero del Tiempo deduce que están tan avanzados que unas máquinas deben de trabajar por ellos. Más tarde descubrirá a los malvados y depredadores Morlocks, y habrá de escapar para salvar la vida."
      />
      </Col>
      <Col>
      <Populares
        imagen={Imagenes.img3}
        titulo="Eternidad"
        resumen="Desde que un trágico accidente acabó con las vidas de sus padres y su hermana, Ever puede oír los pensamientos de todos los que están a su alrededor, ver su aura y descubrir su pasado con sencillamente tocarles la piel."
      />
      </Col>
      </Row>
      
      <Titulo title="Autores Populares" />
      <Row>
        <Col>
      <Autores
        imagen={Imagenes.imga1}
        nombre="Horace Walpole"
        genero="Gotico"
      />
      </Col>
      <Col>
      <Autores
        imagen={Imagenes.imga2}
        nombre="Herbert George Wells"
        genero="Ciencia Ficción"
      />
      </Col>
      <Col>
      <Autores
        imagen={Imagenes.imga3}
        nombre="Alyson Noël"
        genero="Paranormal"
      />
      </Col>
      </Row>
      </Container>
    </>
  );
}
