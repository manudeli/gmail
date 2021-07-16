import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MailNavigationListItem({ item, isActive }) {
  const router = useRouter();

  const iconImageLookup = {
    inbox: 'inbox',
    starred: 'star',
    snoozed: 'watch_later',
    important: 'label_important',
    sent: 'send',
    spam: 'report',
    drafts: 'insert_drive_file',
    trash: 'delete',
  };

  return (
    <li
      className="hover:bg-gray-100 hover:bg-opacity-50 pr-5"
      onClick={() => router.replace(`/mail#${item.hash}`)}
    >
      <div
        className={`flex items-center pl-6 pr-14 rounded-r-full cursor-pointer 
      h-9 ${isActive ? 'bg-black bg-opacity-5' : ''} `}
      >
        <span className="material-icons text-black text-opacity-60 mr-4">
          {iconImageLookup[item.hash]}
        </span>
        <div className="text-sm tracking-wide">{item.label}</div>
      </div>
    </li>
  );
}
