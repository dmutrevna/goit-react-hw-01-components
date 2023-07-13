import PropTypes from 'prop-types';
import { FriendName, ListItem, ImageFriend, Status } from './Friends.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status online={isOnline}>{isOnline}</Status>
      <ImageFriend src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
