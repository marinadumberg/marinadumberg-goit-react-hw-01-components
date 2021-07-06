import UserProfile from "./components/Profile/profileUser";
import user from "../src/json/user.json";
import Statistics from "./components/Statistics/statistic";
import data from "../src/json/statistical-data.json";
import FriendList from "./components/FriendsList/friendsList";
import friends from "./json/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./json/transactions.json";

export default function App() {
  return (
    <div>
      <UserProfile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
