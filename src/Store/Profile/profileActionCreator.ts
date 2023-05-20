import { createAsyncThunk } from "@reduxjs/toolkit";
import http, { baseURL } from "../../Axios/axios";
import { Profile } from "../People/peopleSlice";
import { AppDispatch } from "../store";
import {
  setError,
  setFilms,
  setFilmsLoading,
  setLoading,
  setProfile,
  setSpecies,
  setSpeciesLoading,
  setStarships,
  setStarshipsLoading,
  setVehicles,
  setVehiclesLoading,
} from "./profileSlice";

export const getProfile = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading());
    const response = await http.get<Profile>(`/people/${id}`);
    dispatch(setProfile(response.data));
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    } else if (error.request) {
      dispatch(setError("No response received"));
    } else {
      dispatch(setError(error.message));
    }
  }
};

interface ErrorResponse {
  message: string;
}

export const getFilms = createAsyncThunk<
  {},
  string[],
  { rejectValue: ErrorResponse }
>("getFilms", async (urls, { dispatch }) => {
  dispatch(setFilmsLoading());
  const newUrls = urls.map((url) => url.replace(baseURL, ""));
  try {
    const requests = newUrls.map((url) => http.get(url));
    const responses = await Promise.all(requests);
    dispatch(setFilms(responses.map((response) => response.data)));
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    } else if (error.request) {
      dispatch(setError("No response received"));
    } else {
      dispatch(setError(error.message));
    }
    throw error;
  }
});

export const getSpecial = createAsyncThunk<
  {},
  string[],
  { rejectValue: ErrorResponse }
>("getSpecies", async (urls, { dispatch }) => {
  dispatch(setSpeciesLoading());
  const newUrls = urls.map((url) => url.replace(baseURL, ""));
  try {
    const requests = newUrls.map((url) => http.get(url));
    const responses = await Promise.all(requests);
    dispatch(setSpecies(responses.map((response) => response.data)));
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    } else if (error.request) {
      dispatch(setError("No response received"));
    } else {
      dispatch(setError(error.message));
    }
    throw error;
  }
});

export const getStarships = createAsyncThunk<
  {},
  string[],
  { rejectValue: ErrorResponse }
>("getStarships", async (urls, { dispatch }) => {
  dispatch(setStarshipsLoading());
  const newUrls = urls.map((url) => url.replace(baseURL, ""));
  try {
    const requests = newUrls.map((url) => http.get(url));
    const responses = await Promise.all(requests);
    dispatch(setStarships(responses.map((response) => response.data)));
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    } else if (error.request) {
      dispatch(setError("No response received"));
    } else {
      dispatch(setError(error.message));
    }
    throw error;
  }
});

export const getVehicles = createAsyncThunk<
  {},
  string[],
  { rejectValue: ErrorResponse }
>("getVehicles", async (urls, { dispatch }) => {
  dispatch(setVehiclesLoading());
  const newUrls = urls.map((url) => url.replace(baseURL, ""));
  try {
    const requests = newUrls.map((url) => http.get(url));
    const responses = await Promise.all(requests);
    dispatch(setVehicles(responses.map((response) => response.data)));
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    } else if (error.request) {
      dispatch(setError("No response received"));
    } else {
      dispatch(setError(error.message));
    }
    throw error;
  }
});
