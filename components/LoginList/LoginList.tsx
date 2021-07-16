import router from 'next/router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLogin } from '../../store/slices/userSlice';
import LoginListItem from './LoginListItem';

function LoginList() {
  const userProfiles = useAppSelector((state) => state.user.userProfiles);
  const dispatch = useAppDispatch();

  const clickUserProfile = (userProfile) => {
    dispatch(setLogin(userProfile));
    router.push('/mail#inbox');
  };

  return (
    <ul className="w-96">
      {userProfiles.map((userProfile) => (
        <LoginListItem
          item={userProfile}
          onClick={() => clickUserProfile(userProfile)}
        />
      ))}
    </ul>
  );
}

export default LoginList;
