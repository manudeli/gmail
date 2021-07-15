import { useAppSelector } from '../../store/hooks';
import MailNavigationListItem from './MailNavigationListItem';

export default function MailNavigationList() {
  const currentTab = useAppSelector((state) => state.ui.currentTab);

  const categoryItems = [
    {
      label: 'Inbox',
      hash: 'inbox',
    },
    {
      label: 'Starred',
      hash: 'starred',
    },
    {
      label: 'Snoozed',
      hash: 'snoozed',
    },
    {
      label: 'Sent',
      hash: 'sent',
    },
    {
      label: 'Drafts',
      hash: 'drafts',
    },
    {
      label: 'Important',
      hash: 'important',
    },
    {
      label: 'Spam',
      hash: 'spam',
    },
    {
      label: 'Trash',
      hash: 'trash',
    },
  ];

  return (
    <ul>
      {categoryItems.map((item) => {
        return (
          <MailNavigationListItem
            key={item.hash}
            item={item}
            isActive={currentTab === item.hash}
          />
        );
      })}
    </ul>
  );
}
