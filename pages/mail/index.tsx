import { CurrentTab } from '../../model/ui';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentTab } from '../../store/slices/uiSlice';
import ThreadList from '../../components/ThreadList/ThreadList';
import DropDown from '../../components/UI/DropDown/DropDown';

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

    const hashRoute = router.asPath.match(/#([a-z0-9]+)/gi);

    if (hashRoute && hashRoute.length === 1) {
      const hashValue = hashRoute[0].replace('#', '') as CurrentTab;
      dispatch(setCurrentTab(hashValue));
    } else {
      dispatch(setCurrentTab('inbox'));
    }
  }, [router.asPath]);

  const currentUser = useAppSelector((state) => state.user.userProfile);

  if (!currentUser.id) router.replace('/');

  const myThreadIds = useAppSelector((state) => {
    return state.db.users[currentUser.id]
      ? state.db.users[currentUser.id].threads
      : [];
  });

  let threads = useAppSelector((state) => {
    let threadTab = [];
    let threads = myThreadIds.map((myThreadId) => ({
      id: myThreadId,
      ...state.db.threads[myThreadId],
    }));

    switch (currentTab) {
      case 'inbox':
        threadTab = threads;
        break;
      case 'starred':
        threadTab = threads.filter(
          (thread) => currentUser.starThreads[thread.id] && true
        );
        break;
      case 'snoozed':
        break;
      case 'sent':
        break;
      case 'drafts':
        break;
      case 'important':
        break;
      case 'notes':
        break;
      case 'trash':
        break;
      default:
        break;
    }

    return threadTab;
  });

  return (
    <>
      <Head>
        <title>Gmail - {capitalizeFirstLetter(currentTab)}</title>
      </Head>
      <ThreadList threads={threads} />
    </>
  );
}
