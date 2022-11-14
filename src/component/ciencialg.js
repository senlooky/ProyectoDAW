import {Carousel, Container, Row, Col} from "react-bootstrap"
import Imagenes from "../assets/Imagenes";
import "./aventura.css";

export function Carrusel() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <div className="carrusel">
                <h4>Autores del género de Ciencia Ficción</h4>
                <Carousel fade className="ca">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.imga2}
                      alt="First slide"
                      
                    />
                    <Carousel.Caption>
                      <h3>Herbert George Wells</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.geo}
                      alt="Julio"
  
                    />
  
                    <Carousel.Caption>
                      <h3>George Orwell</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.ray}
                      alt="william "
                     
                    />
  
                    <Carousel.Caption>
                      <h3>Ray Bradbury</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.isa}
                      alt="luciano"
                      
                    />
  
                    <Carousel.Caption>
                      <h3>Isaac Asimov</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.sta}
                      alt="traven"
                     
                    />
  
                    <Carousel.Caption>
                      <h3>Stanislaw Lem</h3>
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
  