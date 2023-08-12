import { InputControl } from "../inputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  
  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="container-login">
      <div className="inner-box">
        <h1 className="login">Login</h1>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl 
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingrese su contraseña"
          type="password"
        />

        <div className="footer-login">
          <b className="error-login">{errorMsg}</b>
          <button onClick={Iniciar} disabled={submitButtonDisabled}>Iniciar Sesión</button>
          <p>
            
            <span>
              <Link to="/signup"> Registrarse</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
