import Imagenes from "../assets/Imagenes";
import "../component/login.css";

export default function LoginPage() {
  return (
    <>
      <div className="login-box">
        <form className="formulario-login">
          <h2>Iniciar Sesión</h2>

          <div className="logo">
            <img src={Imagenes.img1} width="200" height="200" alt="logo" />
          </div>

          <div className="user-box">
            <input type="email" name="" required="yes" placeholder="" />
            <label>Correo Electronico</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="required" placeholder="" />
            <label>Contraseña</label>
          </div>

          <div className="button-form">
            <a id="submit" href="/">
              Iniciar Sesión
            </a>

            <div id="register">
              ¿No tienes cuenta?
              <a href="/LogUp">Registrarse</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
