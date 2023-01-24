import { configureStore } from "@reduxjs/toolkit";
import usuariosReducer from "../features/usuarios/usuariosSlice";
import postsReducer from "../features/usuarios/postSlice";
import utilsReducer from "../features/usuarios/utilsSlice";

export const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,
    posts: postsReducer,
    utils: utilsReducer,
  },
});
