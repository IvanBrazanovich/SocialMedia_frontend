import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <main className={styles.auth__container}>
      <h1>Reset your password</h1>
      <div>
        <form className={styles.auth__form}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="User Email" />
          </div>

          <button className={styles.auth__button}>Get email</button>
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
