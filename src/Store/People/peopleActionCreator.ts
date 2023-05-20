import http from "../../Axios/axios";
import { AppDispatch } from "../store";
import { setError, setLoading, setPeople, RequestState } from "./peopleSlice";

export const getPeople =
  (name: string = "", pageNumber: number = 1) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading());
      const response = await http.get<RequestState>(
        `/people/?page=${pageNumber}&search=${name}`
      );
      dispatch(setPeople({ data: response.data, search: name }));
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
