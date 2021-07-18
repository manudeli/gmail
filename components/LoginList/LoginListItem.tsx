import Image from 'next/image';
import { ProfileImage } from '../ProfileImage';

function LoginListItem({ item, onClick }) {
  return (
    <li
      className=" cursor-pointer 
      rounded-md
      hover:bg-black hover:bg-opacity-5 transition-all"
      onClick={onClick}
    >
      <div className="flex items-center p-3 shadow-sm">
        <ProfileImage imageSrc={item.image} />
        <div className="ml-4 ">
          <h6 className="font-semibold text-base">{item.username}</h6>
          <p className="text-sm">{item.email}</p>
        </div>
      </div>
    </li>
  );
}

export default LoginListItem;
