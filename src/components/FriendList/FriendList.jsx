import { Friend } from './FriendListItem';
import { FriendList } from './Friends.styled';

export const FriendItem = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </FriendList>
  );
};
