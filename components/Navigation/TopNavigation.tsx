import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../store/hooks';
import IconButton from '../UI/IconButton';
import TextInput from '../UI/TextInput';

function TopNavigation() {
  const userProfile = useAppSelector((state) => state.user.userProfile);

  return (
    <nav className="flex items-center bg-gray-100 border-b p-2">
      <div className="flex items-center w-60">
        <IconButton icon="menu" tooltip="Main menu" />
        <div className="flex items-center">
          <Link href="/mail">
            <a className="flex items-center">
              <Image
                className="cursor-pointer"
                height={40}
                width={109}
                src="/assets/logo_gmail.png"
              />
            </a>
          </Link>
        </div>
      </div>
      <TextInput
        iconLeft={<IconButton icon="search" tooltip="Search" />}
        type="text"
        placeholder="Search mail"
        fill
        iconRight={<IconButton icon="tune" tooltip="Show search option" />}
      ></TextInput>
      <IconButton icon="help_outline" tooltip="Support" />
      <IconButton icon="settings" tooltip="Settings" />
      <IconButton icon="apps" tooltip="Google apps" />
      <IconButton
        icon="account_circle"
        tooltip={
          <div className="text-left">
            <strong>Google Account</strong>
            <p className="opacity-80">
              {userProfile.username}
              <br />
              {userProfile.email}
            </p>
          </div>
        }
      />
    </nav>
  );
}

export default TopNavigation;
