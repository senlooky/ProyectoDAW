import { Carousel, Container, Row, Col } from "react-bootstrap";
import Imagenes from "../assets/Imagenes";
import "./aventura.css";

export function Carrusel() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="carrusel">
              <h4>Autores del género de Aventura</h4>
              <Carousel fade className="ca">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imagenes.mark}
                    alt="First slide"
                    
                  />
                  <Carousel.Caption>
                    <h3>Mark Twain</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imagenes.julio}
                    alt="Julio"

                  />

                  <Carousel.Caption>
                    <h3>Julio Verne</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imagenes.william}
                    alt="william "
                   
                  />

                  <Carousel.Caption>
                    <h3>William Goldman</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imagenes.luciano}
                    alt="luciano"
                    
                  />

                  <Carousel.Caption>
                    <h3>Luciano de Samosata</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imagenes.traven}
                    alt="traven"
                   
                  />

                  <Carousel.Caption>
                    <h3>Bruno Traven</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}

export function Cartas({imagen, nombre, resumen}){
  return(
    <>
    <div className="seccion">
    <Container>
      <Row>
        <Col xs={6}><img src={imagen} width="300" height="500"/></Col>
        <Col xs={6} className="dentro">
        <h4>{nombre}</h4>
        <hr />
        <p>{resumen}</p>
        </Col>
      </Row>
      </Container>
    </div>
    </>
  )
}
