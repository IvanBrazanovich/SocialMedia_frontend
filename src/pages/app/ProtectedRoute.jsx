import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/app/Header";
import styles from "../../../styles/pages/app/layout.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../../features/usuarios/usuariosSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();

  // Router
  const navigate = useNavigate();

  const { auth, loading } = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(checkAuth(navigate));
  }, []);

  if (loading) return "...Loading";

  return (
    <div className={styles.main__layout}>
      {auth._id ? (
        <>
          <Header />

          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default ProtectedRoute;
