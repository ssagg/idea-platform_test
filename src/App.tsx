import "./App.css";

import Grid from "@mui/material/Unstable_Grid2";
import React, { useMemo, useState } from "react";

import Filters from "./components/Filters";
import TicketsList from "./components/TicketsList";
import { CheckboxState } from "./types";
import { api } from "./utils/api";

function App() {
  const [currency, setCurrency] = useState<string>("RUB");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<CheckboxState>({
    "0": false,
    "1": false,
    "2": false,
    "3": false,
  });

  const MemoTicketsList = React.memo(TicketsList);
  const MemoFilters = React.memo(Filters);
  const data = useMemo(() => api(selectedCheckboxes), [selectedCheckboxes]);

  return (
    <Grid container spacing={2} columns={2}>
      <Grid xs={1} width={300}>
        <MemoFilters
          currency={currency}
          setCurrency={setCurrency}
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
      </Grid>
      <Grid xs={1} minWidth={700}>
        <MemoTicketsList currency={currency} data={data} />
      </Grid>
    </Grid>
  );
}

export default App;
