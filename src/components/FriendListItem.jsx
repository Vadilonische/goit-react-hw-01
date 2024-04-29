import clsx from 'clsx';
import css from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={clsx(css.friendItem)}>
      <img
        className={clsx(css.friendIcon)}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={clsx(css.friendName)}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
