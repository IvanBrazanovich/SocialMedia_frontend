import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  alert: {},
  hola: "chau",
};

export const createUser = createAsyncThunk(
  "Usuarios/createUsuario",
  async (usuario) => {
    const resOne = await fetch("http://localhost:4000/api/usuarios/register", {
      method: "POST",
      body: JSON.stringify({ msg: "Hola" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resTwo = resOne.json();
  }
);

export const usuariosSlice = createSlice({
  name: "Usuarios",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;

      setTimeout(() => {
        // console.log("hola");
        state.alert = {};
      }, 3000);
    },
  },
  extraReducers(builder) {
    builder.addCase(createUser.fulfilled, (state, action) => {});
  },
});

export const { setAlert } = usuariosSlice.actions;

export default usuariosSlice.reducer;
