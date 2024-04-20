import Stack from "@mui/material/Stack";

import { checkboxesInitialState } from "../types";
import { api } from "../utils/api";
import Cards from "./Card";

interface ICardsList {
  currency: string;
  selectedCheckboxes: checkboxesInitialState;
}
const CardsList = ({ currency, selectedCheckboxes }: ICardsList) => {
  const data = api(selectedCheckboxes);
  console.log(data.length);
  return (
    <Stack spacing={2}>
      {data.length > 0 ? (
        data.map((ticket, index) => (
          <Cards key={index} ticket={ticket} currency={currency} />
        ))
      ) : (
        <div>Нет билетов</div>
      )}
    </Stack>
  );
};

export default CardsList;
