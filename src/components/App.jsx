import Profile from './Profile';
import userData from '../userData.json';
import FriendList from './FriendList';
import friends from '../friends.json';

export default function App() {
  return (
    <div>
      <h1>User Profile</h1>
      {/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      /> */}
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </div>
  );
}
