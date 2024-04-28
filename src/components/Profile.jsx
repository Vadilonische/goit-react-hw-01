import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({
  userData: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={clsx(css.descriptionProfile)}>
      <div className={clsx(css.generalInfoProfile)}>
        <img
          className={clsx(css.avatarProfile)}
          src={avatar}
          alt="User avatar"
          width={100}
          height={100}
        />
        <p className={clsx(css.nameProfile)}>{username}</p>
        <p className={clsx(css.textProfile)}>@{tag}</p>
        <p className={clsx(css.textProfile)}>{location}</p>
      </div>
      <ul className={clsx(css.listStatsProfile)}>
        <li className={clsx(css.listDashboard)}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={clsx(css.listDashboard)}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={clsx(css.listDashboard)}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
