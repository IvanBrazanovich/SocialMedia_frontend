import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "../../../styles/pages/login/login.module.scss";
import Alert from "../../components/Alert";
import { confirmAccount } from "../../features/usuarios/usuariosSlice";

const ConfirmAccount = () => {
  //Redux
  const dispatch = useDispatch();

  //React Redux
  const params = useParams();

  useEffect(() => {
    dispatch(confirmAccount(params.token));
  }, []);

  return (
    <main className={styles.auth__container}>
      <h1>Join Our Social Media</h1>

      <form className={styles.auth__form}>
        <Alert />
      </form>

      <div className={styles.auth__links}>
        <Link to="/register">
          Don't have an account? <span>Register</span>{" "}
        </Link>
        <Link to="/ ">Already have an account?</Link>
      </div>
    </main>
  );
};

export default ConfirmAccount;
