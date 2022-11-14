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
                <h4>Autores del género Paranormal</h4>
                <Carousel fade className="ca">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.imga3}
                      alt="First slide"
                      
                    />
                    <Carousel.Caption>
                      <h3>Alyson Noël</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.noa}
                      alt="Julio"
  
                    />
  
                    <Carousel.Caption>
                      <h3>Noa Xireau</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.ka}
                      alt="william "
                     
                    />
  
                    <Carousel.Caption>
                      <h3>Karen Marie Moning</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={Imagenes.gas}
                      alt="luciano"
                      
                    />
  
                    <Carousel.Caption>
                      <h3>Gaston Leroux</h3>
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
  