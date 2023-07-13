import { Profile } from './Profile/Profile';
import User from 'data/profile.json';
import { UploadStats } from './Statistics/Statistics';
import Data from 'data/data.json';
import { FriendItem } from './FriendList/FriendList';
import Friends from 'data/friends.json';
import { Transaction } from './TransactionHistory/TransactionHistory';
import Transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...User} />
      <UploadStats title="Upload stats" stats={Data} />
      <FriendItem friends={Friends} />
      <Transaction items={Transactions} />;
    </>
  );
};
