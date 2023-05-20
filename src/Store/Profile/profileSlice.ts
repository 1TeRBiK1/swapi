import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Profile } from "../People/peopleSlice";
import { Maybe } from "../../Types/Maybe";

interface Film {
  title: Maybe<string>;
  episode_id: Maybe<number>;
  opening_crawl: Maybe<string>;
  director: Maybe<string>;
  producer: Maybe<string>;
  release_date: Maybe<string>;
}

interface Special {
  name: Maybe<string>;
  classification: Maybe<string>;
  designation: Maybe<string>;
  average_height: Maybe<string>;
  skin_colors: Maybe<string>;
  hair_colors: Maybe<string>;
  eye_colors: Maybe<string>;
  average_lifespan: Maybe<string>;
  homeworld: Maybe<string>;
  language: Maybe<string>;
}

interface Starships {
  name: Maybe<string>;
  model: Maybe<string>;
  manufacturer: Maybe<string>;
  cost_in_credits: Maybe<string>;
  length: Maybe<string>;
  max_atmosphering_speed: Maybe<string>;
  crew: Maybe<string>;
  passengers: Maybe<string>;
  cargo_capacity: Maybe<string>;
  consumables: Maybe<string>;
  hyperdrive_rating: Maybe<string>;
  MGLT: Maybe<string>;
  starship_class: Maybe<string>;
}

interface Vehicles {
  name: Maybe<string>;
  model: Maybe<string>;
  manufacturer: Maybe<string>;
  cost_in_credits: Maybe<string>;
  length: Maybe<string>;
  max_atmosphering_speed: Maybe<string>;
  crew: Maybe<string>;
  passengers: Maybe<string>;
  cargo_capacity: Maybe<string>;
  consumables: Maybe<string>;
  vehicle_class: Maybe<string>;
}

interface AddInfoProperty<T> {
  info: T[];
  loading: boolean;
  error: string | null;
}

interface ProfileState {
  info: Profile;
  loading: boolean;
  error: string | null;
  addInfo: {
    films: AddInfoProperty<Film>;
    species: AddInfoProperty<Special>;
    vehicles: AddInfoProperty<Vehicles>;
    starships: AddInfoProperty<Starships>;
  };
}

const initialState: ProfileState = {
  info: {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  },
  loading: false,
  error: null,
  addInfo: {
    films: { info: [], loading: false, error: null },
    species: { info: [], loading: false, error: null },
    vehicles: { info: [], loading: false, error: null },
    starships: { info: [], loading: false, error: null },
  },
};

export const peopleSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProperty: (
      state,
      action: PayloadAction<{ key: keyof Profile; newValue: string }>
    ) => {
      const { key, newValue } = action.payload;
      state.info[key] = newValue as any;
    },
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.info = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setFilms: (state, action: PayloadAction<Film[]>) => {
      state.addInfo.films.info = action.payload;
      state.addInfo.films.loading = false;
      state.addInfo.films.error = null;
    },
    setSpecies: (state, action: PayloadAction<Special[]>) => {
      state.addInfo.species.info = action.payload;
      state.addInfo.species.loading = false;
      state.addInfo.species.error = null;
    },
    setVehicles: (state, action: PayloadAction<Vehicles[]>) => {
      state.addInfo.vehicles.info = action.payload;
      state.addInfo.vehicles.loading = false;
      state.addInfo.vehicles.error = null;
    },
    setStarships: (state, action: PayloadAction<Starships[]>) => {
      state.addInfo.starships.info = action.payload;
      state.addInfo.starships.loading = false;
      state.addInfo.starships.error = null;
    },
    setFilmsLoading: (state) => {
      state.addInfo.films.loading = true;
      state.addInfo.films.error = null;
    },
    setSpeciesLoading: (state) => {
      state.addInfo.species.loading = true;
      state.addInfo.species.error = null;
    },
    setStarshipsLoading: (state) => {
      state.addInfo.starships.loading = true;
      state.addInfo.starships.error = null;
    },
    setVehiclesLoading: (state) => {
      state.addInfo.vehicles.loading = true;
      state.addInfo.vehicles.error = null;
    },
  },
});

export const {
  setProfile,
  setLoading,
  setError,
  setFilms,
  setSpecies,
  setStarships,
  setVehicles,
  setFilmsLoading,
  setSpeciesLoading,
  setStarshipsLoading,
  setVehiclesLoading,
  setProperty,
} = peopleSlice.actions;

export default peopleSlice.reducer;
