import Head from 'next/head';
import router from 'next/router';
import { useEffect } from 'react';
import GoogleLogo from '../components/GoogleLogo';
import LoginList from '../components/LoginList/LoginList';
import Loading from '../components/UI/Loading';

import { mails, threads, users } from '../lib/api';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setAllDB } from '../store/slices/dbSlice';
import { logout, setUserProfiles } from '../store/slices/userSlice';

export default function HomePage() {
  const disptach = useAppDispatch();
  const uid = useAppSelector((state) => state.user.userProfile.id);
  const allUsers = useAppSelector((state) => state.db.users);

  useEffect(() => {
    disptach(setAllDB({ users, mails, threads }));
    disptach(
      setUserProfiles(
        Object.keys(allUsers).map((key) => ({ id: key, ...users[key] }))
      )
    );
  }, [allUsers]);

  if (uid) {
    router.replace('/mail');
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Gmail - Login</title>
        <meta name="description" content="Gmail Cloning by Jonghyeon" />
      </Head>
      <div
        className="flex flex-col justify-center items-center border border-gray-200
        rounded-md text-gray-600
      p-6 text-sm
      "
      >
        <GoogleLogo />
        <h1 className="text-2xl text-gray-900">로그인</h1>
        <p className="mt-10 mb-4">로그인하신 사용자를 선택하세요</p>
        <LoginList />
      </div>
    </div>
  );
}
