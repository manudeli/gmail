import Head from 'next/head';
import { useRouter } from 'next/router';
import { MailCompose } from '../../components/Mail/MailCompose';
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
            <MailCompose
              key={index}
              mail={mail}
              isLastMail={mails.length - 1 === index}
            />

            {mails.length - 1 !== index && <div className="border-t" />}
          </>
        ))}
      </ul>
    </div>
  );
}

export default ThreadCompose;
