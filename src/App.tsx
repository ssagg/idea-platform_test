import Grid from "@mui/material/Unstable_Grid2";
import React, { useMemo, useState } from "react";

import Filters from "./components/Filters";
import TicketsList from "./components/TicketsList";
import { FiltersCheckboxInitialState } from "./constants/constants";
import { FiltersCheckboxState } from "./types";
import { api } from "./utils/api";
import { CurrencyContext, SelectedCheckboxesContext } from "./context/context";

function App() {
  const [currency, setCurrency] = useState<"RUB" | "USD" | "EUR">("RUB");
  const [selectedCheckboxes, setSelectedCheckboxes] =
    useState<FiltersCheckboxState>(FiltersCheckboxInitialState);

  const MemoTicketsList = React.memo(TicketsList);
  const MemoFilters = React.memo(Filters);
  const data = useMemo(() => api(selectedCheckboxes), [selectedCheckboxes]);

  return (
    <CurrencyContext.Provider value={currency}>
      <SelectedCheckboxesContext.Provider value={selectedCheckboxes}>
        <Grid container spacing={2} columns={2}>
          <Grid xs={1} width={310}>
            <MemoFilters
              setCurrency={setCurrency}
              setSelectedCheckboxes={setSelectedCheckboxes}
            />
          </Grid>
          <Grid xs={1} minWidth={700}>
            <MemoTicketsList data={data} />
          </Grid>
        </Grid>
      </SelectedCheckboxesContext.Provider>
    </CurrencyContext.Provider>
  );
}

export default App;
