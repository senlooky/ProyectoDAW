import Imagenes from "../assets/Imagenes";
import "../component/login.css";

export default function LogUpPage() {
  return (
    <>
      <div className="login-box">
        <form className="formulario-register">
          <h2>Registrarse</h2>

          <div className="logo">
            <img src={Imagenes.img1} width="200" height="200" alt="logo" />
          </div>

          <div className="user-box">
            <input type="text" name="nombre" required="yes" />
            <label>Nombre Completo</label>
          </div>

          <div className="user-box">
            <input type="email" name="email" required="yes" />
            <label>Correo Electronico</label>
          </div>

          <div className="user-box">
            <input type="password" name="password" required="yes" />
            <label>Contraseña</label>
          </div>

          <div class="button-form">
            <a id="submit" href="/">
              Registrarse
            </a>

            <div id="register">
              ¿Ya tienes cuenta?
              <a href="/Login">Iniciar Sesion</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
