import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className={styles.auth__container}>
      <h1>Login in to your account</h1>
      <div>
        <form className={styles.auth__form}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="User Email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type="password" id="password" />
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
