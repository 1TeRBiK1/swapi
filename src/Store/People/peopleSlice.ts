import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface RequestState {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}

export interface PeopleState {
  data: RequestState;
  loading: boolean;
  error: string | null;
  pageNumber: number;
  search: string;
}

const initialState: PeopleState = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  loading: false,
  error: null,
  pageNumber: 1,
  search: "",
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeople: (
      state,
      action: PayloadAction<{ data: RequestState; search: string }>
    ) => {
      state.data = action.payload.data;
      state.loading = false;
      state.error = null;
      state.search = action.payload.search;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPeople, setLoading, setError, setPageNumber } =
  peopleSlice.actions;

export default peopleSlice.reducer;
