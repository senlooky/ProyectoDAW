import { Container, Row, Col } from "react-bootstrap";
import { Carrusel, Cartas } from "../component/Aventuralg";
import { Titulo } from "../component/Homelg";
import Imagenes from "../assets/Imagenes";
import Navegation from "../component/Navegation";

export default function AventuraPage() {
  return (
    <>
    <Navegation/>
      <Titulo title="Libros de Aventura" />
      <Carrusel />
      <Container fluid>
      <Row>
        <Col>
        <Cartas imagen={Imagenes.lverne} nombre="Miguel Strogoff" resumen="Los tártaros rompen los cables telegráficos de la localidad de Tomsk, luego de los Urales  eliminando por completo toda la comunicación entre el zar y su hermano. No obstante los hombres del zar se dan cuenta rápidamente sobre las intenciones de Ivan Ogareff de entrar en Irkutsk con un nombre diferente para ganar la seguridad del Gran Duque y así, cuando fuese necesario asesinarlo para  entregar la ciudad a los tártaros y terminar con su malvado plan de venganza.

"/></Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Cartas imagen={Imagenes.lte} nombre="El tesoro de sierra Madre" resumen="Dobbs es un vagabundo estadounidense que trata de sobrevivir en el México de después de la Revolución. Tras conocer a Howard, un veterano buscador de oro y a Curtin, otro buscavidas, parten hacia Sierra Madre Occidental. Allí encuentran un filón de oro. Empiezan a excavar llenos de ilusión, pero el trabajo es más duro y los beneficios más parcos de lo previsto. Pronto la situación genera recelos y riñas por lo que se fijan un plazo para cerrar la mina y marchar. Pero unos bandidos llegan al lugar y amenazan su existencia."/></Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Cartas imagen={Imagenes.prin} nombre="La princesa prometida" resumen="Una compleja novela que combina fantasía, romance, cuento de hadas y mucho humor. Narra una versión ficticia de la vida y familia del autor, de las aventuras y desventuras de sus antepasados. Es una novela donde hay espadachines, amor imperecedero, odio intenso y venganzas despiadadas."/></Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Cartas imagen={Imagenes.re} nombre="Relatos Fantasticos" resumen="Nacido en Siria en el siglo II, Luciano es uno de los grandes satíricos no solo de la Antigüedad, sino de todos los tiempos. Invirtiendo los patrones clásicos que en las artes, la filosofía y la literatura tomó como ideales la época de la Segunda Sofística, Luciano hizo de la parodia, la fabulación fantástica y la sátira social ingredientes esenciales de su obra"/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
        <Cartas imagen={Imagenes.finn} nombre="Las aventuras de Huckleberry Finn" resumen="Toda la literatura moderna estadounidense procede de un libro escrito por Mark Twain llamado Huckleberry Finn, decía Hemingway, que sabía algo de esto de vivir, leer y escribir aventuras. La secuela de Las aventuras de Tom Sawyer no solo continúa el alegre sentimiento aventurero de su predecesora, sino que introdujo el lenguaje coloquial y soez en el estirado mundillo de los libros, creó al alma más libre de la literatura y de paso dio un buen puñado de argumentos antirracistas para su época y unas cuantas lecciones de amistad."/>
        </Col>
      </Row>  
      <br />   
      <Row>
        <Col>
        <Cartas imagen={Imagenes.isla} nombre="La isla del tesoro" resumen="¿Qué serían de los libros de aventuras sin un viaje lejos de casa, la búsqueda de un tesoro, una isla desierta, una marca negra y un personaje mefistofélico que nos atrae y nos repulsa al mismo tiempo con su moral ambigüa y seductora? En La isla del tesoro hay tantos de estos ingredientes como manzanas en un tonel y es pura gasolina para nuestras fantasías, de niños o adultos. La fascinación que produce John Silver el Largo, padre sustituto de Hawkins y pirata cojo y embustero se adelantó en más de un siglo a Jack Sparrow."/>
        </Col>
      </Row>   
      <br /> 
      <Row>
        <Col>
        <Cartas imagen={Imagenes.mujer} nombre="El pais de las mujeres" resumen="Menuda sorpresa se van a llevar los tres aventureros que deciden echar un vistazo en la remota tierra de la que se rumorea que está habitada únicamente por mujeres. '¿Necesitarán de mi protección?' se pregunta uno '¿Las conquistaré con facilidad?', fantasea otro… La isla de las mujeres es una novela utópica escrita en 1915 por la feminista Charlotte Perkins Gilman. Leerla en la actualidad es muy instructivo, por eso ya la recomendamos como uno de los 25 libros feministas que todos deberíamos leer."/>
        </Col>
      </Row>    

    </Container>
    </>
  );
}
