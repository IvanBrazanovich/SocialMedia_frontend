import { configureStore } from "@reduxjs/toolkit";
import usuariosReducer from "../features/usuarios/usuariosSlice";

export const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,
  },
});
