import Profile from './Profile';
import userData from '../userData.json';
import FriendList from './FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <div>
      <h1>HW-1</h1>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
