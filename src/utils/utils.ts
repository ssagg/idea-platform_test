export const selectStops = (stops: number) => {
  return !stops
    ? "прямой"
    : stops === 1
    ? `${stops} пересадка`
    : `${stops} пересадки`;
};

//get from external api
const UsdExchange = 93;
const EurExchange = 100;

export const getPriceLabel = (currency: string, price: number) => {
  const rub = new Intl.NumberFormat("ru-RU").format(price);
  return currency === "RUB"
    ? rub
    : currency === "USD"
    ? Math.floor(price / UsdExchange)
    : price / EurExchange;
};
