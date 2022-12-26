import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/components/extras.module.scss";

const Alert = () => {
  const alert = useSelector((state) => state.usuarios.alert);

  if (!alert.msg) return;

  return <div className={styles.alert}>{alert.msg}</div>;
};

export default Alert;
