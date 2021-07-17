import Image from 'next/image';
import React from 'react';

interface Props {
  imageSrc: string;
}

export const ProfileImage = ({ imageSrc }: Props) => {
  return (
    <div className="inline-flex overflow-hidden rounded-full">
      <Image width={50} height={50} src={imageSrc} objectFit="cover" />
    </div>
  );
};
