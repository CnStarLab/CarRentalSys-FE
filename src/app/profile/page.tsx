import ProfileClient from '@/components/profile/ProfileClient';
import React from "react";
import Warning from '#/warning.png';
import Image from 'next/image'; // 如果你使用的是 Next.js，建议使用 Image 组件来优化图片加载

export default function Profile() {
  // static data needs to be replaced with dynamic data
  const profileData = {
    firstName: 'Amaraa',
    lastName: 'Bayaraa',
    phoneNumber: '+976 99001234',
    email: 'Bayaraa@gmail.com',
    isVerified: false,
    password: '********',
  };

  return (
    <div>
      <div className="font-bold text-4xl mb-6">Профайл</div>
      <div className="flex items-center bg-custom-blue1 p-4 rounded-md mb-6">
        <Image src={Warning} alt="Warning" className="mr-2" width={30} height={30} />
        <div>warning</div>
      </div>
      <ProfileClient {...profileData} />
    </div>
  );
}