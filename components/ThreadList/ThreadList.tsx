import router from 'next/router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { readThreadDB } from '../../store/slices/dbSlice';
import { readThread } from '../../store/slices/userSlice';

import { ThreadListItem } from './ThreadListItem';

function ThreadList({ threads }) {
  const currentUserId = useAppSelector((state) => state.user.userProfile.id);
  const dispatch = useAppDispatch();
  return (
    <ul>
      {threads.map((thread) => (
        <ThreadListItem
          key={thread.id}
          thread={thread}
          onClickHandle={() => {
            dispatch(readThread(thread.id));
            dispatch(readThreadDB({ currentUserId, threadId: thread.id }));
            router.push(`mail/${thread.id}`);
          }}
        />
      ))}
    </ul>
  );
}

export default ThreadList;
