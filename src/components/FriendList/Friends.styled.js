import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  border-radius: 20%;
  border: 2px solid black;
  width: 150px;
  align-items: baseline;
  justify-content: center;
  background-color: gray;
  margin-bottom: 20px;
  padding: 10px;
`;

export const FriendName = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ImageFriend = styled.img`
  width: 48px;
  height: 48px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
`;
