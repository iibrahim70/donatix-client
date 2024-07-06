import { formatDistanceToNow } from "date-fns";

const getDaysAgo = (givenDate: string) => {
  const distance = formatDistanceToNow(new Date(givenDate), {
    addSuffix: true,
  });
  return distance;
};

export default getDaysAgo;
