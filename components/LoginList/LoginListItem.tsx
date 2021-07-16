import Image from 'next/image';

function LoginListItem({ item, onClick }) {
  return (
    <li
      className=" cursor-pointer 
      rounded-md
      hover:bg-black hover:bg-opacity-5 transition-all"
      onClick={onClick}
    >
      <div className="flex items-center p-3 shadow-sm">
        <div className="inline-flex overflow-hidden rounded-full">
          <Image width={50} height={50} src={item.image} objectFit="cover" />
        </div>
        <div className="ml-4 ">
          <h6 className="font-bold">{item.username}</h6>
          <p className="">{item.email}</p>
        </div>
      </div>
    </li>
  );
}

export default LoginListItem;
