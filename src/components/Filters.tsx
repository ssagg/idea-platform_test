import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import React, { Dispatch } from "react";

import { CheckboxState } from "../types";
import Checkboxes from "./Checkboxes";
import Slider from "./Slider";

export type FiltersProps = {
  currency: string;
  setCurrency: Dispatch<string>;
  selectedCheckboxes: CheckboxState;
  setSelectedCheckboxes: Dispatch<CheckboxState>;
  handleCurrency?: (
    event: React.MouseEvent<HTMLElement>,
    newCurrency: string
  ) => void;
};

const Filters = ({
  currency,
  setCurrency,
  selectedCheckboxes,
  setSelectedCheckboxes,
}: FiltersProps) => {
  const handleCurrency = (
    event: React.MouseEvent<HTMLElement>,
    newCurrency: string
  ) => {
    setCurrency(newCurrency);
  };

  return (
    <Card sx={{ padding: 2, textAlign: "left" }}>
      <Stack spacing={2}>
        <Slider
          currency={currency}
          handleCurrency={handleCurrency}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
        <Checkboxes
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
      </Stack>
    </Card>
  );
};

export default Filters;
