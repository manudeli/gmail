import router from 'next/router';
import { useEffect } from 'react';

import { CurrentTab } from '../../model/ui';
import { useAppSelector } from '../../store/hooks';

import { ThreadListItem } from './ThreadListItem';

function ThreadList() {
  const currentUser = useAppSelector((state) => state.user.userProfile);

  const currentTab = useAppSelector(
    (state) => state.ui.currentTab
  ) as CurrentTab;

  if (!currentUser.id) router.replace('/');

  const myThreadIds = useAppSelector(
    (state) => state.db.users[currentUser.id].threads
  );

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
    <ul>
      {threads.map((thread) => (
        <ThreadListItem
          key={thread.id}
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
