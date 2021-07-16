import { CurrentTab } from '../../model/ui';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MailLayout from '../../components/MailLayout';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentTab } from '../../store/slices/uiSlice';
import ThreadList from '../../components/ThreadList/ThreadList';

export default function MailPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentTab = useAppSelector((state) => state.ui.currentTab);
  const uid = useAppSelector((state) => state.user.userProfile.id);
  const capitalizeFirstLetter = (str: string) =>
    str.split(' ').map((char) => char.charAt(0).toUpperCase() + char.slice(1));

  useEffect(() => {
    if (!uid) {
      router.replace('/');
    }

    console.log(router.query);
    const hashRoute = router.asPath.match(/#([a-z0-9]+)/gi);
    console.log(hashRoute);

    if (hashRoute && hashRoute.length === 1) {
      const hashValue = hashRoute[0].replace('#', '') as CurrentTab;
      dispatch(setCurrentTab(hashValue));
    } else {
      router.push('/mail#inbox');
      dispatch(setCurrentTab('inbox'));
    }
  }, [router.asPath]);

  return (
    <div>
      <Head>
        <title>Gmail - {capitalizeFirstLetter(currentTab)}</title>
      </Head>
      <ThreadList />
    </div>
  );
}
