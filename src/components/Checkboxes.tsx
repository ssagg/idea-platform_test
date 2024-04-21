import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

import { FiltersProps } from "./Filters";

type CheckboxesProps = Pick<
  FiltersProps,
  "selectedCheckboxes" | "setSelectedCheckboxes"
>;

const Checkboxes = ({
  selectedCheckboxes,
  setSelectedCheckboxes,
}: CheckboxesProps) => {
  return (
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
              name='0'
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
              name='1'
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
              name='2'
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
              name='3'
            />
          }
          label='3 пересадки'
        />
      </FormGroup>
    </FormControl>
  );
};

export default Checkboxes;
