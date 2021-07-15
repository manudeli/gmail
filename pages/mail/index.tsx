import { CurrentTab } from '../../model/ui';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MailLayout from '../../components/MailLayout';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentTab } from '../../store/slices/uiSlice';

export default function MailPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentTab = useAppSelector((state) => state.ui.currentTab);
  const capitalizeFirstLetter = (str: string) =>
    str.split(' ').map((char) => char.charAt(0).toUpperCase() + char.slice(1));

  useEffect(() => {
    const hashRoute = router.asPath.match(/#([a-z0-9]+)/gi);

    if (hashRoute && hashRoute.length === 1) {
      const hashValue = hashRoute[0].replace('#', '') as CurrentTab;
      dispatch(setCurrentTab(hashValue));
    } else {
      router.push('/mail#inbox');
    }
  }, [router.asPath]);

  return (
    <div>
      <Head>
        <title>
          Gmail - {capitalizeFirstLetter(currentTab)}
          {}
        </title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <MailLayout>{currentTab}</MailLayout>
      </div>
    </div>
  );
}
