import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <main className={styles.auth__container}>
      <h1>Change password </h1>
      <div>
        <form className={styles.auth__form}>
          <div>
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type="password" id="password" />
          </div>

          <div>
            <label htmlFor="password">Verify password</label>
            <input placeholder="Password" type="password" id="password" />
          </div>

          <button className={styles.auth__button}>Change Password</button>
        </form>
      </div>

      <div className={styles.auth__links}>
        <Link to="/">
          Already have an account? <span>Login</span>{" "}
        </Link>
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
    </main>
  );
};

export default ChangePassword;
