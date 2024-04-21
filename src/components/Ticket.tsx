import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { useMemo } from "react";

import plane from "../assets/airplane.png";
import ta from "../assets/ta_logo.png";
import { TicketType } from "../types";

type TicketProps = {
  ticket: TicketType;
  currency: string;
};

const Ticket = ({ ticket, currency }: TicketProps) => {
  const {
    arrival_date,
    arrival_time,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops,
  } = ticket;

  //get from external api
  const UsdExchange = 93;
  const EurExchange = 100;

  const rub = new Intl.NumberFormat("ru-RU").format(price);
  const convertDate = useMemo(
    () => (date: string) => {
      const parsedDepDate = parse(date, "dd.MM.yy", new Date());
      return format(parsedDepDate, "dd MMMM yyyy, EEE", {
        locale: ru,
      });
    },
    []
  );

  return (
    <Card sx={{ minWidth: 275, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid
          xs={4}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <img src={ta} width={150} />
          <Button variant='contained' color='warning' sx={{ minWidth: 200 }}>
            <div>
              Купить{" "}
              <div style={{ display: "flex", flexDirection: "row" }}>
                {" "}
                за{" "}
                {currency === "RUB"
                  ? rub
                  : currency === "USD"
                  ? Math.floor(price / UsdExchange)
                  : price / EurExchange}{" "}
                {currency === "RUB" ? (
                  <div> &#8381;</div>
                ) : currency === "USD" ? (
                  <div> &#36;</div>
                ) : (
                  <div> &euro;</div>
                )}
              </div>
            </div>
          </Button>
        </Grid>
        <Grid xs={1} display='flex'>
          <Divider orientation='vertical'></Divider>
        </Grid>
        <Grid xs={7}>
          <Grid
            container
            spacing={2}
            display='flex'
            justifyContent='space-between'
          >
            <Grid xs={3}>
              <Stack spacing={1} textAlign={"left"}>
                <Typography variant='h4' color='text.secondary' gutterBottom>
                  {departure_time}
                </Typography>
                <Stack spacing={0.1}>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: "bold" }}
                    color='text.secondary'
                    gutterBottom
                  >
                    {origin}, {origin_name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    {convertDate(departure_date)}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={3}>
              <Stack spacing={0.1} textAlign={"center"}>
                <Typography variant='body2' color='text.secondary' gutterBottom>
                  {!stops
                    ? "прямой"
                    : stops === 1
                    ? `${stops} пересадка`
                    : `${stops} пересадки`}
                </Typography>
                <Stack
                  color='text.secondary'
                  width={100}
                  display='flex'
                  justifyContent='space-between'
                  flexDirection='row'
                  alignItems='center'
                >
                  <hr style={{ width: 80 }}></hr>
                  <img src={plane} width={14} style={{ rotate: "45deg" }} />
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={3}>
              <Stack spacing={1} textAlign={"right"}>
                <Typography variant='h4' color='text.secondary' gutterBottom>
                  {arrival_time}
                </Typography>
                <Stack spacing={0.1}>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: "bold" }}
                    color='text.secondary'
                    gutterBottom
                  >
                    {destination_name}, {destination}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    {convertDate(arrival_date)}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Ticket;