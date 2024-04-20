import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

import CardsList from "./components/CardsList";
import Filters from "./components/Filters";
import { checkboxesInitialState } from "./types";

function App() {
  const [currency, setCurrency] = useState<string>("RUB");

  const [selectedCheckboxes, setSelectedCheckboxes] =
    useState<checkboxesInitialState>({
      0: false,
      1: false,
      2: false,
      3: false,
    });

  console.log(selectedCheckboxes);
  return (
    <Grid container spacing={2} columns={16}>
      <Grid xs={5} minWidth={300}>
        <Filters
          currency={currency}
          setCurrency={setCurrency}
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
      </Grid>
      <Grid xs={11} minWidth={600}>
        <CardsList
          currency={currency}
          selectedCheckboxes={selectedCheckboxes}
        />
      </Grid>
    </Grid>
  );
}

export default App;
