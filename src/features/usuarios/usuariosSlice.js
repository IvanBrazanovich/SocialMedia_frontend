import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const initialState = {
  alert: {},
  user: {},
  validToken: false,
};

export const createUser = createAsyncThunk(
  "Usuarios/createUsuario",
  async (argument, { dispatch }) => {
    const { navigate, usuario } = argument;

    const resOne = await fetch("http://localhost:4000/api/usuarios/register", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resTwo = await resOne.json();
    if (resOne.status === 400) {
      dispatch(
        setAlert({
          msg: resTwo.msg,
          error: true,
        })
      );
      dispatch(closeAlert());
      return;
    }

    //If everything is ok
    dispatch(
      setAlert({
        msg: resTwo.msg,
        error: false,
      })
    );
    dispatch(closeAlert());

    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
);

export const authenticateUser = createAsyncThunk(
  "Usuarios/authenticateUser",
  async (argument) => {
    const { data, navigate } = argument;
    const resOne = await fetch("http://localhost:4000/api/usuarios/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resTwo = await resOne.json();

    if (resOne.status === 200) {
      navigate("/app");
    }

    return resTwo;
  }
);

export const closeAlert = createAsyncThunk(
  "Usuarios/closeAlert",
  async (action) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (err) {
      console.log(err);
    }
  }
);

export const confirmAccount = createAsyncThunk(
  "Usuarios/confirmAccount",
  async (token, { dispatch }) => {
    const resOne = await fetch(
      `http://localhost:4000/api/usuarios/confirm/${token}`
    );

    const resTwo = await resOne.json();

    dispatch(
      setAlert({
        msg: resTwo.msg,
        error: resOne.status !== 200,
      })
    );
  }
);

export const forgotPassword = createAsyncThunk(
  "Usuarios/forgetPassword",
  async function (email, { dispatch }) {
    const resOne = await fetch(
      `http://localhost:4000/api/usuarios/forget-password`,
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resTwo = await resOne.json();

    dispatch(
      setAlert({
        msg: resTwo.msg,
        error: resOne.status !== 200,
      })
    );
  }
);

export const confirmToken = createAsyncThunk(
  "Usuarios/confirmToken",
  async function (token, { dispatch }) {
    const resOne = await fetch(
      `http://localhost:4000/api/usuarios/forget-password/${token}`
    );

    const resTwo = await resOne.json();

    if (resOne.status !== 403) {
      return { valid: true };
    } else {
      dispatch(
        setAlert({
          msg: resTwo.msg,
          error: true,
        })
      );
      throw new Error("Not allowed");
    }
  }
);

export const changePassword = createAsyncThunk(
  "Usuarios/changePassword",
  async function (data, { dispatch }) {
    const { password, token, navigate } = data;

    const resOne = await fetch(
      `http://localhost:4000/api/usuarios/change-password/${token}`,
      {
        method: "POST",
        body: JSON.stringify({ password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resTwo = await resOne.json();

    dispatch(
      setAlert({
        msg: resTwo.msg,
        error: resOne.status !== 200,
      })
    );

    dispatch(closeAlert());

    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
);

export const usuariosSlice = createSlice({
  name: "Usuarios",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(createUser.fulfilled, (state, action) => {});
    builder.addCase(createUser.rejected, (state, action) => {
      state.alert = {
        msg: action.error.message,
        error: true,
      };
    });
    builder.addCase(closeAlert.fulfilled, (state, action) => {
      state.alert = {};
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(confirmToken.fulfilled, (state, action) => {
      if (action.payload.valid) {
        state.validToken = true;
      }
    });
  },
});

export const { setAlert } = usuariosSlice.actions;

export default usuariosSlice.reducer;
