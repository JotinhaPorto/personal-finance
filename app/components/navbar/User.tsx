import getCurrentUser from '@/actions/getCurrentUser'
import { AuthUser } from '@/types/AuthUser'
import Image from 'next/image'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

type UserProps = {
    user: AuthUser;
    isVisible?: boolean
}


const User = ({ user, isVisible }: UserProps) => {


    return (
        <div className={`flex flex-col ${isVisible ? 'items-start pl-6' : 'items-center'}`}>
            <div className={`rounded-full p-2 max-w-[40px] bg-white flex justify-center`}>
                <AiOutlineUser className='text-black w-5 h-5' />
            </div>
            {isVisible &&
                <>
                    <span className='text-white text-lg'>{user?.name}</span>
                    <span className='text-gray-400 text-sm'>{user?.email}</span>
                </>
            }
        </div>
    )
}

export default User