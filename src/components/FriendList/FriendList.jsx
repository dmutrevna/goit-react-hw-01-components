import { Friend } from './FriendListItem';
import { FriendList } from './Friends.styled';
import PropTypes from 'prop-types';

export const FriendItem = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <Friend key={friend.id} {...friend} />
      ))}
    </FriendList>
  );
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
