import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  closeAlert,
  forgotPassword,
  setAlert,
} from "../../features/usuarios/usuariosSlice";
import { useState } from "react";
import Alert from "../../components/Alert";

const ForgotPassword = () => {
  //State
  const [email, setEmail] = useState("");

  //Redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Form validation
    if (email.trim() === "") {
      dispatch(
        setAlert({
          msg: "Todos los campos son obligatorios",
          error: true,
        })
      );
      dispatch(closeAlert());

      return;
    }

    dispatch(forgotPassword(email));
  };

  return (
    <main className={styles.auth__container}>
      <h1>Reset your password</h1>
      <div>
        <form onSubmit={handleSubmit} className={styles.auth__form}>
          <Alert />
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="User Email"
            />
          </div>

          <button type="submit" className={styles.auth__button}>
            Get email
          </button>
        </form>
      </div>

      <div className={styles.auth__links}>
        <Link to="/">
          Already have an account? <span>Login</span>
        </Link>
        <Link to="/register">
          Don't have an account? <span>Register</span>
        </Link>
      </div>
    </main>
  );
};

export default ForgotPassword;
