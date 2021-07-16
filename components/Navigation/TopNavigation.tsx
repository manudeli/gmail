import Image from 'next/image';
import Link from 'next/link';
import IconButton from '../UI/IconButton';
import TextInput from '../UI/TextInput';

function TopNavigation() {
  return (
    <nav className="flex items-center bg-gray-100 border-b p-2">
      <div className="flex items-center w-60">
        <IconButton icon="menu" />
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
      <TextInput icon="search" type="text" placeholder="Search mail" fill>
        <IconButton icon="tune" />
      </TextInput>
      <IconButton icon="help_outline" />
      <IconButton icon="settings" />
      <IconButton icon="apps" />
      <IconButton icon="account_circle" />
    </nav>
  );
}

export default TopNavigation;
