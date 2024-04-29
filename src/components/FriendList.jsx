import FriendListItem from './FriendListItem';
import clsx from 'clsx';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul className={clsx(css.friendList)}>
      {friends.map(friend => (
        <li className={clsx(css.friendListItem)} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
