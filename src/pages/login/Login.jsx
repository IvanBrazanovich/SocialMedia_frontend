import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";

const Login = () => {
  return (
    <main>
      <div className={styles.auth_container}>
        <h1>Login</h1>

        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
        </form>
      </div>
      <p>hola</p>
    </main>
  );
};

export default Login;
