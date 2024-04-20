import data from "../tickets.json";
import { Ticket, checkboxesInitialState } from "../types";

export const api = (filters: checkboxesInitialState) => {
  const res = data.tickets.filter((ticket: Ticket) => {
    if (filters[0] || filters[1] || filters[2] || filters[3]) {
      return filters[ticket.stops];
    }
    return ticket;
  });
  return res;
};
