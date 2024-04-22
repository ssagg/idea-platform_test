import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

import { FiltersProps } from "./Filters";
import { useContext } from "react";
import { CurrencyContext } from "../context/context";

type SliderProps = Pick<FiltersProps, "setCurrency">;

const Slider = ({ setCurrency }: SliderProps) => {
  const currency = useContext(CurrencyContext);

  const handleCurrency = (
    _event: React.MouseEvent<HTMLElement>,
    newCurrency: "RUB" | "USD" | "EUR"
  ) => {
    setCurrency(newCurrency);
  };
  return (
    <>
      <Typography variant='h6'>ВАЛЮТА</Typography>
      <ToggleButtonGroup
        color='primary'
        value={currency}
        exclusive
        onChange={handleCurrency}
        aria-label='currencies'
      >
        <ToggleButton value='RUB' aria-label='RUB' sx={{ width: 100 }}>
          RUB
        </ToggleButton>
        <ToggleButton value='USD' aria-label='USD' sx={{ width: 100 }}>
          USD
        </ToggleButton>
        <ToggleButton value='EUR' aria-label='EUR' sx={{ width: 100 }}>
          EUR
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography variant='h6'>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
    </>
  );
};

export default Slider;
