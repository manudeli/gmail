import Image from 'next/image';
import React from 'react';

interface Props {
  className?;
  imageSrc: string;
  size?: number;
}

export const ProfileImage = ({ className, imageSrc, size = 50 }: Props) => {
  return (
    <div className={`inline-flex overflow-hidden rounded-full ${className}`}>
      <Image width={size} height={size} src={imageSrc} objectFit="cover" />
    </div>
  );
};
