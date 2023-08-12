import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../inputControl";

export function Signup() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container-signup">
      <div className="inner-box-signup">
        <h1 className="registro">Registro</h1>
        <InputControl
          label="Nombre"
          placeholder="Ingrese un nombre"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Ingrese su correo"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Contraseña"
          placeholder="Ingrese una contraseña"
          type="password"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className="footer-signup">
          <b className="errorSignup">{errorMsg}</b>
          <button onClick={registro} disabled={submitButtonDisabled}>
            Guardar
          </button>
          <p>
            Si ya tienes una cuenta 
            <span>
              <Link to="/login"> Inicia Sesión</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
