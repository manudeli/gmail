import Head from 'next/head';
import { useRouter } from 'next/router';
import { MailCompose } from '../../components/Mail/MailCompose';
import Button from '../../components/UI/Button';

import { ThreadId } from '../../model/mails';
import { useAppSelector } from '../../store/hooks';

function ThreadCompose() {
  const router = useRouter();

  const threadId = router.query.threadId as ThreadId;

  const thread = useAppSelector((state) => ({
    id: threadId,
    ...state.db.threads[threadId],
  }));

  const mails = useAppSelector((state) => {
    return thread.mails
      ? thread.mails.map((mailId) => ({
          id: mailId,
          ...state.db.mails[mailId],
        }))
      : [];
  });

  return (
    <div>
      <Head>
        <title>{thread.title}</title>
      </Head>
      <div className="pl-20 pt-4 pb-2">
        <h2 className="text-xl">{thread.title}</h2>
      </div>
      <ul className="mr-4">
        {mails.map((mail, index) => (
          <>
            <MailCompose key={index} mail={mail} />
            {mails.length - 1 !== index && <div className="border-t" />}
          </>
        ))}
      </ul>
      <div className="flex items-center gap-2 pl-16 py-2">
        <Button
          variant="outlined"
          materialIcon="reply"
          onClick={() => {
            console.log('reply');
          }}
        >
          Reply
        </Button>
        <Button variant="outlined" materialIcon="forward">
          Forward
        </Button>
      </div>
    </div>
  );
}

export default ThreadCompose;
