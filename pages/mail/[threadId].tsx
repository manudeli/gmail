import Head from 'next/head';
import { useRouter } from 'next/router';
import { MailCompose } from '../../components/Mail/MailCompose';

import { getMails, getThread } from '../../lib/api';
import { ThreadId, Mail, Thread } from '../../model/mails';

function ThreadCompose() {
  const router = useRouter();

  const threadId = router.query.threadId as ThreadId;
  const thread = getThread(threadId) as Thread;
  const mails = getMails(threadId) as Mail[];

  return (
    <div>
      <Head>
        <title>{thread.title}</title>
      </Head>
      <div className="pl-20 pt-4 pb-2">
        <h2 className="text-xl">{thread.title}</h2>
      </div>
      <ul className="mr-4">
        {mails.map((mail) => (
          <MailCompose key={mail.id} mail={mail} />
        ))}
      </ul>
    </div>
  );
}

export default ThreadCompose;
