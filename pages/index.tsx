import Head from 'next/head';
import router from 'next/router';
import { useEffect } from 'react';
import GoogleLogo from '../components/GoogleLogo';
import LoginList from '../components/LoginList/LoginList';
import Button from '../components/UI/Button';

import { getAllUsers } from '../lib/api';
import { useAppDispatch } from '../store/hooks';
import { setUserProfiles } from '../store/slices/userSlice';

export default function HomePage() {
  const disptach = useAppDispatch();

  useEffect(() => {
    const allUsers = getAllUsers();
    disptach(setUserProfiles(allUsers));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Gmail - Login</title>
        <meta name="description" content="Gmail - Mail" />
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
