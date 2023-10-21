'use client'
import React, { useCallback, useState } from 'react'
import User from './User'
import MainNav from './MainNav'
import { AuthUser } from '@/types/AuthUser'
import { signOut } from 'next-auth/react'
import { CiLogout, CiMenuBurger } from 'react-icons/ci'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineUser } from 'react-icons/ai'
import { BiSolidDashboard } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { GoArrowSwitch } from 'react-icons/Go'
import { usePathname } from 'next/navigation'

type SideNavbarProps = {
    user: AuthUser
}

const SideNavbar = ({ user }: SideNavbarProps) => {

    const [openMenu, setOpenMenu] = useState(false)

    const onOpen = useCallback(() => {
        setOpenMenu((value) => !value)
    }, [])


    return (
        <div className={`fixed flex h-screen flex-col transition-all duration-150 ease-linear bg-[#232323] ${openMenu ? 'w-[250px]' : 'w-12'}`}>
            <button
                onClick={onOpen}
                className='  text-white mx-2 mt-2 flex justify-center hover:border-gray-200  border border-transparent outline-none rounded '
            >
                {openMenu ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
            </button>




            <div className='flex flex-col justify-between flex-1 py-10'>
                <User user={user} isVisible={openMenu} />
                <MainNav isVisible={openMenu} />
                <div className={`flex ${openMenu ? 'pl-6' : 'justify-center'}  text-white`}>
                    <button
                        onClick={() => signOut()}
                        className='flex gap-2 items-center hover:text-gray-300'
                    >
                        <CiLogout />
                        {openMenu && <span>Sair</span>}
                    </button>
                </div>
            </div>

        </div >
    )
}

export default SideNavbar