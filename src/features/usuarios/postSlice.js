import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  feedPosts: [],
};

export const addPost = createAsyncThunk(
  "Posts/addPosts",
  async function (data, { dispatch }) {
    const token = JSON.parse(localStorage.getItem("token"));

    const resOne = await fetch(
      `http://localhost:4000/api/posts/`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const resTwo = await resOne.json();

    console.log(resTwo);
    console.log(resOne);
  }
);

export const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const {} = postSlice.actions;

export default postSlice.reducer;
