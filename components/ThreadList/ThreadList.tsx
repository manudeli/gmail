import router from 'next/router';
import { useEffect } from 'react';
import { getThreads } from '../../lib/api';
import { Thread } from '../../model/mails';
import { CurrentTab } from '../../model/ui';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setThreads } from '../../store/slices/inboxSlice';

import { ThreadListItem } from './ThreadListItem';

function ThreadList() {
  const dispatch = useAppDispatch();
  const currentTab = useAppSelector(
    (state) => state.ui.currentTab
  ) as CurrentTab;
  const threads = useAppSelector((state) => state.inbox.threads) as Thread[];

  useEffect(() => {
    let newThreads = [];
    newThreads = getThreads(currentTab, 'user-1');
    dispatch(setThreads(newThreads));
  }, [currentTab]);

  const currentTabThreads = null;

  return (
    <ul>
      {threads.map((thread) => (
        <ThreadListItem
          thread={thread}
          onClickHandle={() => {
            router.push(`mail/${thread.id}`);
          }}
        />
      ))}
    </ul>
  );
}

export default ThreadList;
