import { Stack, Card } from "@mui/material";
import React, { Dispatch } from "react";
import { FiltersCheckboxState } from "../types";
import Checkboxes from "./Checkboxes";
import Slider from "./Slider";

export type FiltersProps = {
  setCurrency: Dispatch<"RUB" | "USD" | "EUR">;
  setSelectedCheckboxes: Dispatch<FiltersCheckboxState>;
  handleCurrency?: (
    event: React.MouseEvent<HTMLElement>,
    newCurrency: "RUB" | "USD" | "EUR"
  ) => void;
};

const Filters = ({ setCurrency, setSelectedCheckboxes }: FiltersProps) => {
  return (
    <Card sx={{ padding: 2, textAlign: "left" }}>
      <Stack spacing={2}>
        <Slider setCurrency={setCurrency} />
        <Checkboxes setSelectedCheckboxes={setSelectedCheckboxes} />
      </Stack>
    </Card>
  );
};

export default Filters;
