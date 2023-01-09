import React from "react";
import styles from "../../../styles/pages/login/login.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  closeAlert,
  confirmToken,
  setAlert,
} from "../../features/usuarios/usuariosSlice";
import Alert from "../../components/Alert";
import { useState } from "react";

const ChangePassword = () => {
  //State
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  //Redux
  const dispatch = useDispatch();
  const { validToken } = useSelector((state) => state.usuarios);

  //React Router
  const navigate = useNavigate();

  useEffect(() => {
    const { token } = params;

    dispatch(confirmToken(token));
  }, []);

  //React Router
  const params = useParams();

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (
      [password.trim(), verifyPassword.trim()].includes("") ||
      password.trim() !== verifyPassword.trim()
    ) {
      dispatch(
        setAlert({
          msg: "Not a valid password or passwords are not equal",
          error: true,
        })
      );
      dispatch(closeAlert());
      return;
    }
    const { token } = params;

    dispatch(changePassword({ token, password, navigate }));
  };

  return (
    <main className={styles.auth__container}>
      <h1>Change password </h1>
      <div>
        <form onSubmit={handleSubmit} className={styles.auth__form}>
          {!validToken ? (
            <Alert />
          ) : (
            <>
              <div>
                <Alert />
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                  id="password"
                />
              </div>

              <div>
                <label htmlFor="password">Verify password</label>
                <input
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                  id="password"
                />
              </div>

              <button type="submit" className={styles.auth__button}>
                Change Password
              </button>
            </>
          )}
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
