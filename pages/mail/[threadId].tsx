import Head from 'next/head';
import { useRouter } from 'next/router';
import MailLayout from '../../components/MailLayout';
import ThreadList from '../../components/ThreadList/ThreadList';
import { getMails } from '../../lib/api';
import { ThreadId, Mail, MailId } from '../../model/mails';

function Thread() {
  const router = useRouter();

  const threadId = router.query.threadId as ThreadId;

  const mails = getMails(threadId) as Mail[];

  return (
    <div>
      <Head>
        <title>Gmail</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <MailLayout>
          {router.query.threadId}

          <ul>
            {mails.map((mail) => (
              <li>{mail.content}</li>
            ))}
          </ul>
        </MailLayout>
      </div>
    </div>
  );
}

export default Thread;
