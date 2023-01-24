import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const searchUser = createAsyncThunk(
  "utilsSlice/searchUser",
  async function (data, { dispatch }) {
    // Get token
    const token = JSON.parse(localStorage.getItem("token"));

    console.log(`http://localhost:4000/api/utils/search-user/${data.search}`);
    const resOne = await fetch(
      `http://localhost:4000/api/utils/search-user/${data.search}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token} `,
        },
      }
    );

    console.log(resOne);
    const resTwo = await resOne.json();

    console.log(resTwo);
  }
);

export const utilsSlice = createSlice({
  name: "Utils",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const {} = utilsSlice.actions;

export default utilsSlice.reducer;
