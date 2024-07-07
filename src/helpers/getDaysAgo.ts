import { formatDistanceToNow } from "date-fns";

// Function to get the time distance from the given date to now, in a human-readable format
const getDaysAgo = (givenDate: string) => {
  // Calculate the distance from the given date to now, adding a suffix like "ago"
  const distance = formatDistanceToNow(new Date(givenDate), {
    addSuffix: true,
  });

  // Return the formatted distance
  return distance;
};

export default getDaysAgo;
