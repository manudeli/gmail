import router from 'next/router';

import { ThreadListItem } from './ThreadListItem';

function ThreadList({ threads }) {
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
