import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAlert,
  closeAlert,
  authenticateUser,
} from "../../features/usuarios/usuariosSlice";
import Alert from "../../components/Alert";

const Login = () => {
  //State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux
  const dispatch = useDispatch();

  // React router
  const navigate = useNavigate();

  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();

    // FORM VALIDATION
    if ([email, password].map((item) => item.trim()).includes("")) {
      dispatch(
        setAlert({
          msg: "Todos los campos son obligatorios",
          error: true,
        })
      );
      dispatch(closeAlert());

      return;
    }

    //Comprobar si el usuario está registrado
    dispatch(authenticateUser({ data: { password, email }, navigate }));

    setEmail("");
    setPassword("");
  };

  return (
    <main className={styles.auth__container}>
      <h1>Login in to your account</h1>
      <div>
        <form onSubmit={handleSubmit} className={styles.auth__form}>
          <Alert />

          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="User Email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              id="password"
            />
          </div>

          <button className={styles.auth__button}>Login</button>
        </form>
      </div>

      <div className={styles.auth__links}>
        <Link to="/register">
          Don't have an account? <span>Register</span>{" "}
        </Link>
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
    </main>
  );
};

export default Login;
