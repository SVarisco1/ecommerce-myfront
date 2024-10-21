import { IUserSession } from '@/interfaces/IUserSession';
import { cookies } from 'next/headers';
import React from 'react'

const ProfileView = () => {
  const cookieStore = cookies()
  const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? "{}")
  return (
    <div>
        <h1>Your profile</h1>
        <h2>{userData.user.name}</h2>
        <p>{userData.user.address}</p>
        <p>{userData.user.phone}</p>
    </div>
  )
};

export default ProfileView;