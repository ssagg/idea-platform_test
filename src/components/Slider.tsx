import {
  Button,
  FormControl,
  FormGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { FiltersProps } from "./Filters";

type SliderProps = Pick<FiltersProps, "currency" | "setSelectedCheckboxes" | 'handleCurrency'>;

const Slider = ({
  currency,
  handleCurrency,
  setSelectedCheckboxes,
}: SliderProps) => {
  return (
    <>
      <h3>ВАЛЮТА</h3>
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
      <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
        <FormGroup>
          <Button
            onClick={() =>
              setSelectedCheckboxes({
                "0": false,
                "1": false,
                "2": false,
                "3": false,
              })
            }
          >
            Сбросить
          </Button>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default Slider;
