import { Card, Typography, Stack } from "@mui/material";

import { TicketType } from "../types";
import TicketCard from "./Ticket";

type TicketsProps = {
  data: TicketType[];
};
const TicketsList = ({ data }: TicketsProps) => {
  return (
    <Stack spacing={2}>
      {data.length ? (
        data.map((ticket, index) => <TicketCard key={index} ticket={ticket} />)
      ) : (
        <Card style={{ minWidth: 275 }}>
          <Typography>Нет билетов</Typography>
        </Card>
      )}
    </Stack>
  );
};

export default TicketsList;
