import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <div className="bg-gray-50">
      <ul>
        <li>
          <Link href={`/mail/u/0/inbox`}>
            <a>Inbox</a>
          </Link>
        </li>
        <li>
          <Link href={`/mail/u/0/starred`}>
            <a>Starred</a>
          </Link>
        </li>
        <li>
          <Link href={`/mail/u/0/snoozed`}>
            <a>Snoozed</a>
          </Link>
        </li>
        <li>
          <Link href={`/mail/u/0/sent`}>
            <a>Sent</a>
          </Link>
        </li>
        <li>
          <Link href={`/mail/u/0/drafts`}>
            <a>Drafts</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
