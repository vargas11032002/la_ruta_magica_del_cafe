import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

const Login = () => {
  const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { correo, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };
      setLoading(true);
      try {
        const response = await axios.post("rutaback.up.railway.app/login", Usuario);
        const { data } = response;

        // Verifica si 'data' tiene la propiedad 'usuario' y 'token'
        if (data && data.usuario && data.usuario.token) {
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            localStorage.setItem("token", data.usuario.token);
            navigate(`/store`);
          }, 1500);
        } else {
          // Maneja el caso en el que 'token' no está presente en la respuesta
          console.error("Token no presente en la respuesta del servidor");
          setMensaje("Error en la respuesta del servidor");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        }
      } catch (error) {
        console.error(error);
        setMensaje("Correo u contraseña incorrecta");
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }

      setInputs({ correo: "", contraseña: "" });
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h3>Bienvenido a la Ruta mágica del café del Huila</h3>
        <br />
        <h2>Inicio de Sesión!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="correo">Correo</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={correo}
                name="correo"
                id="correo"
                type="email"
                placeholder="Correo..."
                autoComplete="off"
              />
            </div>
            {/* ... (resto del código) ... */}
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="contraseña">Contraseña</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={contraseña}
                name="contraseña"
                id="contraseña"
                type="password"
                placeholder="Contraseña..."
                autoComplete="off"
              />
            </div>
            {/* ... (resto del código) ... */}
          </div>
          <button type="submit">
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
          <p>
            Aun no tienes cuenta?{" "}
            <b onClick={() => navigate("/register")}>Registrate!</b>
          </p>
        </form>
      </div>

      {mensaje && <div className={styles.toast}>{mensaje}</div>}
    </>
  );
};

export default Login;
