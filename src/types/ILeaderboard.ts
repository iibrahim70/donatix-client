export interface ILeaderboard {
  _id: number;
  auth_id: {
    name: string;
    avatar: string;
  };
  amount_donated: number;
  last_donation: string;
  total_donation: number;
  isRecurring: boolean;
}
