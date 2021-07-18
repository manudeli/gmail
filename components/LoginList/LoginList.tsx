import router from 'next/router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLogin } from '../../store/slices/userSlice';
import LoginListItem from './LoginListItem';

interface LoginListProps {
  hideLoggedInUser?: boolean;
}

function LoginList({ hideLoggedInUser = false }: LoginListProps) {
  const userProfiles = useAppSelector((state) => state.user.userProfiles);
  const loggedInUserProfile = useAppSelector((state) => state.user.userProfile);
  const dispatch = useAppDispatch();

  const clickUserProfile = (userProfile) => {
    dispatch(setLogin(userProfile));
    router.replace('/mail#inbox');
  };

  return (
    <ul className="w-80 flex flex-col items-center">
      <div className="w-full">
        {userProfiles
          .filter((userProfile) => {
            if (hideLoggedInUser)
              return userProfile.id !== loggedInUserProfile.id;
            return true;
          })
          .map((userProfile) => (
            <LoginListItem
              key={userProfile.id}
              item={userProfile}
              onClick={() => clickUserProfile(userProfile)}
            />
          ))}
      </div>
    </ul>
  );
}

export default LoginList;
