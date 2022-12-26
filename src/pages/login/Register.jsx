import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../features/usuarios/usuariosSlice";
import Alert from "../../components/Alert";

const Register = () => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  // REDUX
  const dispatch = useDispatch();

  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();

    // FORM VALIDATION
    if (
      [name, email, password, secondPassword]
        .map((item) => item.trim())
        .includes("")
    ) {
      dispatch(
        setAlert({
          msg: "Todos los campos son obligatorios",
          error: true,
        })
      );
    }
  };

  return (
    <main className={styles.auth__container}>
      <h1>Register for free </h1>

      <form className={styles.auth__form} onSubmit={handleSubmit}>
        <Alert />
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            id="name"
            placeholder="Your Name"
          />
        </div>

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
            autoComplete="on"
          />
        </div>

        <div>
          <label htmlFor="secondPassword">Verify password</label>
          <input
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
            placeholder="Verify password"
            type="password"
            autoComplete="on"
            id="secondPassword"
          />
        </div>

        <button type="submit" className={styles.auth__button}>
          Login
        </button>
      </form>

      <div className={styles.auth__links}>
        <Link to="/">
          Already have an account? <span>Login</span>{" "}
        </Link>
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
    </main>
  );
};

export default Register;
