import { Carrusel } from "../component/ciencialg";
import { Cartas } from "../component/Aventuralg";
import { Titulo } from "../component/Homelg";
import { Container, Row, Col } from "react-bootstrap";
import Imagenes from "../assets/Imagenes";
import Navegation from "../component/Navegation";

export default function CienciaPage() {
  return (
    <>
      <Navegation />
      <br />
      <Titulo title="Libros de Ciencia Ficción" />
      <Carrusel />
      <Container fluid>
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.img2}
              nombre="La Maquina del Tiempo"
              resumen="Al llegar al año 802.701, un viajero del tiempo se encuentra con los Morlocks y los Eloi, seres antagónicos de una sociedad influenciada por un pasado de desigualdades. La máquina del tiempo (The Time Machine) es una novela de ficción del escritor británico Herbert George Wells, publicada por primera vez en Londres en el año 1895 por William Heinemann. Consta de dieciséis capítulos y un epílogo. Está basada en la teoría del Eternalismo."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.mil}
              nombre="1984"
              resumen="En 1984, Londres está controlada por un gobieno totalitario. El Gran Hermano lo vigila absolutamente todo. La mano ejecutora, la Policía del Pensamiento, controla cada aspecto de la vida de los ciudadanos. Un hombre llamado Winston Smith, trabajador del Ministerio de la Verdad, intentará rebelarse contra el régimen opresor."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.fa}
              nombre="Fahrenheit 451"
              resumen="Fahrenheit 451 ofrece la historia de un sombrío y horroroso futuro. Montag, el protagonista, pertenece a una extraña brigada de bomberos cuya misión, paradójicamente, no es la de sofocar incendios sino la de provocarlos para quemar libros. Porque en el país de Montag está terminantemente prohibido leer. Porque leer obliga a pensar, y en el país de Montag está prohibido pensar. Porque leer impide ser ingenuamente feliz, y en el país de Montag hay que ser feliz a la fuerza... La novela más célebre de Ray Bradbury, maestro de la ficción científica."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.fin}
              nombre="El fin de la eternidad"
              resumen="Andrew Harlan ha cometido un crimen, pero su acto no es un simple delito. Porque la ley que ha quebrantado es la más importante de todas para un Ejecutor: la ley que impide que miles de años de historia sean borrados y reescritos de forma irreversible por la guerra, la muerte y la decadencia. Pero ni siquiera la Eternidad, la organización a la que pertenece, puede detenerle. Harlan ha sido entrenado para introducir cambios en el tiempo, y sólo él puede rescatar a la única persona que le importa antes de que uno de los cambios la haga desaparecer para siempre. Lo que Harlan no sabe, sin embargo, es que lo que está en juego es mucho más de lo que él cree. Y lo que no podría imaginar de ningún modo es la partida de ajedrez temporal de la que forma parte, una partida que puede decidir el futuro de la humanidad."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.sol}
              nombre="Solaris"
              resumen="Una novela ecléctica en que conviven la ciencia ficción, el misterio y el amor en un ambiente denso e inquietante. El astronauta Kelvin se enfrenta a una nueva modalidad de agresión, una especie de enorme inteligencia oceánica que ocupa el planeta Solaris... Éste es el punto de partida de una alegoría de la condición humana, condenada a no obtener jamás respuestas definitivas a su ansia de conocimiento, el astronauta Kelvin se enfrenta a una nueva modalidad de agresión, una especie de enorme inteligencia oceánica que ocupa el planeta Solaris... Éste es el punto de partida de una alegoría de la condición humana, condenada a no obtener jamás respuestas definitivas a su ansia de conocimiento."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
