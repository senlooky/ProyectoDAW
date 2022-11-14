import { Button, Fade } from "react-bootstrap";
import React, { useState } from "react";
import "./Home.css";

export function Titulo({ title }) {
  return (
    <>
      <div className="titulo">
        <h1>{title}</h1>
      </div>
      <br />
    </>
  );
}

export function Populares({ imagen, resumen, titulo }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <br />
      <div>
        <section>
          <article>
            <img
              src={imagen}
              width="250px"
              height="300px"
              className="imagen"
              alt="imagen"
            />
            <h4>{titulo}</h4>
            <Button
              variant="outline-secondary"
              id="button"
              onClick={() => setOpen(!open)}
              aria-controls="example-fade-text"
              aria-expanded={open}
            >
              Resumen
            </Button>
            <Fade in={open}>
              <div id="example-fade-text">{resumen}</div>
            </Fade>
          </article>
        </section>
      </div>
      <br />
    </>
  );
}

export function Autores({ imagen, nombre, genero }) {
  return (
    <>
      <br />
      <div>
        <section>
          <article>
            <img
              src={imagen}
              width="250"
              height="300"
              className="imagen"
              alt="img"
            />
            <h4>{nombre}</h4>
            <h6>Genero:</h6>
            <h5>{genero}</h5>
          </article>
        </section>
      </div>
      <br />
    </>
  );
}
