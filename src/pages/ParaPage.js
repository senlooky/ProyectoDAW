import { Carrusel } from "../component/Paralg";
import { Cartas } from "../component/Aventuralg";
import { Titulo } from "../component/Homelg";
import { Container, Row, Col } from "react-bootstrap";
import Imagenes from "../assets/Imagenes";
import Navegation from "../component/Navegation"

export default function ParaPage(){
    return (
<>
<Navegation/>
      <Titulo title="Libros Paranormales" />
      <Carrusel />
      <Container fluid>
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.img3}
              nombre="Eternidad"
              resumen="Al llegar al año 802.701, un viajero del tiempo se encuentra con los Morlocks y los Eloi, seres antagónicos de una sociedad influenciada por un pasado de desigualdades. La máquina del tiempo (The Time Machine) es una novela de ficción del escritor británico Herbert George Wells, publicada por primera vez en Londres en el año 1895 por William Heinemann. ConsDesde que un trágico accidente acabó con las vidas de sus padres y su hermana, Ever puede oír los pensamientos de todos los que están a su alrededor, ver su aura y descubrir su pasado con sencillamente tocarles la piel. Además, Ever se comunica con el espíritu de su hermana, que la visita casi todas las noches en casa de su tía. Tras unos meses de convalecencia, Ever empieza el curso en una nueva escuela, donde pronto se gana la fama de chica rara. Solo tiene dos amigos, los también excéntricos Haven y Miles. Pero todo cambia cuando un chico nuevo se incorpora a su clase: se llama Damen y es atractivo y exótico, por lo que todas las chicas, Haven incluida, quieren ganarse su interés."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.rt}
              nombre="Ritual"
              resumen="La historia comienza con una escena impactante, pues Soraya, la protagonista, está al borde de un acantilado meditando acerca de si arrojarse al vacío es mejor que seguir viviendo con su habilidad especial, una habilidad que le da el poder de ver espíritus del más allá que constantemente se comunican con ella.
        
              Este don la hace diferente a las demás personas y debido a esto muchas veces se ha sentido como si no encajara, rara, dejada de lado. Esto es hasta que se gana una beca para estudiar un máster en Irlanda y allí conoce a Aileen y a su familia, quienes la acogen dentro de su casa y la tratan como a una hija más.
              
              Soraya crea un lazo muy estrecho con la abuela de Aileen, Moira, ella parece comprenderla más profundamente que lo que Soraya se da cuenta. El último día de clases y antes de irse de vacaciones a Portugal, Moira le da un regalo muy especial a Soraya con la premisa de que lo va a necesitar en el futuro."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.cast}
              nombre="El beso del highlander"
              resumen="Drustan MacKeltar durmió durante casi cinco siglos debido a un hechizo, hasta que Gwen Cassidy, una joven de nuestro tiempo, lo despierta. Encantado por un poderoso hechizo, Drustan MacKeltar durmió durante casi cinco siglos oculto en las profundidades de una cueva, hasta que una atractiva salvadora lo despertó."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Cartas
              imagen={Imagenes.fan}
              nombre="El fantasma de la opera"
              resumen="A final de la segunda mitad del siglo XIX, en el Teatro de la Ópera de París no se hablaba de otra cosa que de la existencia de un ser extraño de apariencia aterradora que hacía imperar sus leyes en el palco número cinco del teatro. Las bailarinas de la ópera, el coro, las limpiadoras, los ejecutivos, las acomodadoras, sobre todo Madame Giry, que servía al palco del fantasma, todos hablaban atemorizados de que lo habían visto en alguna ocasión."
            />
          </Col>
        </Row>
      </Container>
    </>

    )
}