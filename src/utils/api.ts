import data from "../tickets.json";
import { FiltersCheckboxState, TicketType } from "../types";

export const api = (filters: Partial<FiltersCheckboxState>) => {
  const checkedFilters = Object.keys(filters).filter(
    (key) => filters[key] === true
  );
  if (checkedFilters.length) {
    return data.tickets.filter((ticket: TicketType) =>
      checkedFilters.includes(ticket.stops.toString())
    );
  }
  return data.tickets;
};
