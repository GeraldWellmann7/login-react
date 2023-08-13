import { Link } from "react-router-dom";
import {auth} from "../firebase"
import { useState, useEffect } from "react";

function salir() {
    return auth.signOut()
    
  }
  export function Home(props) {
    const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    if (props.name) {
      setWelcomeMessage(`Bienvenido - ${props.name}`);
    } else {
      setWelcomeMessage("Bienvenido nuevo usuario");
    }
  }, [props.name]);

    return (
      <div className="home">
        
        <div className="container-links">
          <div className="login-firebase">
            
            
            <h1>Login Firebase</h1>
            
          
          </div>
          
          <div className="links">
            <h1>
              <Link to="/login">Iniciar Sesión</Link>
            </h1>
            <br />
            <h1>
              <Link to="/signup">Registrarse</Link>
            </h1>
          </div>
        <div className="bienvenido">
        <h2>{welcomeMessage}</h2>
        </div>
       
        <button onClick={salir}>Salir</button>
        </div>
      </div>
    );
  }
  