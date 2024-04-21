import { Card, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

import { TicketType } from "../types";
import TicketCard from "./Ticket";

type TicketsProps = {
  currency: string;
  data: TicketType[];
};
const TicketsList = ({ currency, data }: TicketsProps) => {
  return (
    <Stack spacing={2}>
      {data.length ? (
        data.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} currency={currency} />
        ))
      ) : (
        <Card style={{ minWidth: 275 }}>
          <Typography>Нет билетов</Typography>
        </Card>
      )}
    </Stack>
  );
};

export default TicketsList;
