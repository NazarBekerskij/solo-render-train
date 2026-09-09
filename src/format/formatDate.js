import { format, formatDistanceStrict } from "date-fns";

export const formatDate = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const dateStr = format(startDate, "d MMMM yyyy");
  const startTime = format(startDate, "HH:mm");
  const endTime = format(endDate, "HH:mm");
  
  const duration = formatDistanceStrict(startDate, endDate);

  return `${dateStr}, ${startTime} - ${endTime} (${duration})`;
};