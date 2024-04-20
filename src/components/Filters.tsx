import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Card from "@mui/material/Card";
import React, { Dispatch } from "react";

import { checkboxesInitialState } from "../types";

interface IFilters {
  currency: string;
  setCurrency: Dispatch<string>;
  selectedCheckboxes: checkboxesInitialState;
  setSelectedCheckboxes: Dispatch<checkboxesInitialState>;
}

const Filters = ({
  currency,
  setCurrency,
  selectedCheckboxes,
  setSelectedCheckboxes,
}: IFilters) => {
  const handleCurrency = (
    event: React.MouseEvent<HTMLElement>,
    newCurrency: string
  ) => {
    setCurrency(newCurrency);
  };

  return (
    <Card sx={{ padding: 2, textAlign: "left" }}>
      <Stack spacing={2}>
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
                  0: false,
                  1: false,
                  2: false,
                  3: false,
                })
              }
            >
              Сбросить
            </Button>

            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCheckboxes[0]}
                  onChange={(e) =>
                    setSelectedCheckboxes({
                      ...selectedCheckboxes,
                      0: e.target.checked,
                    })
                  }
                  name='0'
                />
              }
              label='Без пересадок'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCheckboxes[1]}
                  onChange={(e) =>
                    setSelectedCheckboxes({
                      ...selectedCheckboxes,
                      1: e.target.checked,
                    })
                  }
                  name='1'
                />
              }
              label='1 пересадка'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCheckboxes[2]}
                  onChange={(e) =>
                    setSelectedCheckboxes({
                      ...selectedCheckboxes,
                      2: e.target.checked,
                    })
                  }
                  name='2'
                />
              }
              label='2 пересадки'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCheckboxes[3]}
                  onChange={(e) =>
                    setSelectedCheckboxes({
                      ...selectedCheckboxes,
                      3: e.target.checked,
                    })
                  }
                  name='3'
                />
              }
              label='3 пересадки'
            />
          </FormGroup>
        </FormControl>
      </Stack>
    </Card>
  );
};

export default Filters;
