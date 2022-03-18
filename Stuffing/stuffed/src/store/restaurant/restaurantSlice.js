import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
const axios = require("axios");
export const fetchRestaurants = createAsyncThunk(
  "fetchRestaurants",
  async (teamId) => {
    console.log(teamId);
    var data = await axios.get("http://localhost:3000/getRestaurant", {
      params: {
        lon: -72.631119,
        lat: 42.206242,
        radius: 1,
      },
    });

    return data.data;
  }
);
export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    data: { count: 0, data: [] },
    currentActive: 0,
    loading: "",
  },
  reducers: {
    setActive: (state, action) => {
      var getID = action.payload.res;
      state.data.data.map((obj) =>
        obj._id === getID ? { ...obj, isActive: true } : obj
      );
      state.data.data.map((obj) =>
        obj._id === state.currentActive ? { ...obj, isActive: false } : obj
      );

      state.currentActive = action.payload.res;
    },
    setRestaurant: (state, action) => {},
    getRestaurant: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      console.log(current(state));
      action.payload.data.forEach((x) => {
        x.isActive = false;
      });
      state.data = action.payload;
      state.data.data[0].isActive = true;
      state.currentActive = state.data.data[0]._id;
      state.loading = "loaded";
    });
  },
});

// Action creators are generated for each case reducer function
export const { setActive, setRestaurant, incrementByAmount, getRestaurant } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
