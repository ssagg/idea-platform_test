import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

import { FiltersProps } from "./Filters";
import { useContext } from "react";
import { SelectedCheckboxesContext } from "../context/context";
import { FiltersCheckboxInitialState } from "../constants/constants";

type CheckboxesProps = Pick<FiltersProps, "setSelectedCheckboxes">;

const Checkboxes = ({ setSelectedCheckboxes }: CheckboxesProps) => {
  const selectedCheckboxes = useContext(SelectedCheckboxesContext);
  return (
    <>
      <Button
        onClick={() => setSelectedCheckboxes(FiltersCheckboxInitialState)}
      >
        Сбросить
      </Button>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCheckboxes["0"]}
                onChange={(e) =>
                  setSelectedCheckboxes({
                    ...selectedCheckboxes,
                    "0": e.target.checked,
                  })
                }
              />
            }
            label='Без пересадок'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCheckboxes["1"]}
                onChange={(e) =>
                  setSelectedCheckboxes({
                    ...selectedCheckboxes,
                    "1": e.target.checked,
                  })
                }
              />
            }
            label='1 пересадка'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCheckboxes["2"]}
                onChange={(e) =>
                  setSelectedCheckboxes({
                    ...selectedCheckboxes,
                    "2": e.target.checked,
                  })
                }
              />
            }
            label='2 пересадки'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCheckboxes["3"]}
                onChange={(e) =>
                  setSelectedCheckboxes({
                    ...selectedCheckboxes,
                    "3": e.target.checked,
                  })
                }
              />
            }
            label='3 пересадки'
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default Checkboxes;
