import { createContext } from "react";
import { FiltersCheckboxInitialState } from "../constants/constants";

export const CurrencyContext = createContext("");

export const SelectedCheckboxesContext = createContext(
  FiltersCheckboxInitialState
);
