import {
  formatDistanceToNow,
  isFuture,
  isPast,
  isToday,
  differenceInHours,
} from "date-fns";

export const formateStartDate = (date: string) => {
  const distance = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  return distance;
};

export const formatEndDate = (date: string) => {
  const endDate = new Date(date);

  // Case 1: No end date (ongoing campaign)
  if (!date) {
    return { text: "Ongoing", status: "active" };
  }

  // Case 2: Campaign has ended
  if (isPast(endDate)) {
    const timeAgo = formatDistanceToNow(endDate, { addSuffix: true });
    return { text: `Ended ${timeAgo}`, status: "ended" };
  }

  // Case 3: Campaign is active and ends in the future
  if (isFuture(endDate)) {
    const hoursRemaining = differenceInHours(endDate, new Date());

    // Sub-case: Ending very soon (less than 24 hours)
    if (isToday(endDate) || hoursRemaining < 24) {
      if (hoursRemaining < 1) {
        return { text: "Ending soon", status: "urgent" };
      }
      return { text: `Ends in ${hoursRemaining} hours`, status: "urgent" };
    }

    // Default future case: "in X days/months"
    const timeLeft = formatDistanceToNow(endDate);
    return { text: `Ends in ${timeLeft}`, status: "active" };
  }

  // Fallback for any other scenario
  return {
    text: `Ends on ${endDate.toLocaleDateString()}`,
    status: "active",
  };
};
