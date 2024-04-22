import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { useContext, useMemo } from "react";

import plane from "../assets/airplane.png";
import ta from "../assets/ta_logo.png";
import { TicketType } from "../types";
import { getPriceLabel, selectStops } from "../utils/utils";
import { CurrencyContext } from "../context/context";

type TicketProps = {
  ticket: TicketType;
};

const Ticket = ({ ticket }: TicketProps) => {
  const currency = useContext(CurrencyContext);
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
      <Grid container spacing={2} justifyContent='space-evenly'>
        <Grid
          xs={4}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <img src={ta} width={150} />
          <Button variant='contained' color='warning' sx={{ minWidth: 200 }}>
            <Box>
              Купить
              <Box display='flex' flexDirection='row'>
                за {getPriceLabel(currency, price)}
                {currency === "RUB" ? (
                  <Box> &#8381;</Box>
                ) : currency === "USD" ? (
                  <Box> &#36;</Box>
                ) : (
                  <Box> &euro;</Box>
                )}
              </Box>
            </Box>
          </Button>
        </Grid>
        <Grid xs={0.5} display='flex'>
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
              <Stack spacing={0.5} textAlign={"center"}>
                <Typography variant='body2' color='text.secondary' gutterBottom>
                  {selectStops(stops)}
                </Typography>
                <Stack
                  direction='row'
                  color='text.secondary'
                  width={100}
                  spacing={1}
                  alignItems='center'
                >
                  <Divider
                    orientation='horizontal'
                    style={{ width: 80 }}
                  ></Divider>

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
