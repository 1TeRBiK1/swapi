import React from "react";
import { render, screen } from "@testing-library/react";
import PeopleCard from "./PeopleCard";

test("renders PeopleCard component with correct information", () => {
  const info = {
    name: "Luke Skywalker",
    birth_year: "19BBY",
    eye_color: "Blue",
    gender: "Male",
    hair_color: "Blond",
    height: "172",
    mass: "77",
    skin_color: "Fair",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  };

  render(<PeopleCard info={info} />);

  // Assert that the card title is rendered with the correct name
  expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();

  // Assert that the card content is rendered with the correct information
  expect(screen.getByText("Birth year: 19BBY")).toBeInTheDocument();
  expect(screen.getByText("Eye color: Blue")).toBeInTheDocument();
  expect(screen.getByText("Gender: Male")).toBeInTheDocument();
  expect(screen.getByText("Hair color: Blond")).toBeInTheDocument();
  expect(screen.getByText("Height: 172 cm")).toBeInTheDocument();
  expect(screen.getByText("Mass: 77 kg")).toBeInTheDocument();
  expect(screen.getByText("Skin color: Fair")).toBeInTheDocument();
});
