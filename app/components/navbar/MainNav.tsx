'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { GoArrowSwitch } from 'react-icons/Go'

type MainNavProps = {
    isVisible?: boolean
}

const MainNav = ({ isVisible }: MainNavProps) => {

    const pathName = usePathname()

    const routes = [
        {
            href: '/',
            label: 'Dashboard',
            icon: <BiSolidDashboard />,
            active: pathName === '/'
        },
        {
            href: 'transacoes',
            label: 'Transações',
            icon: <GoArrowSwitch />,
            active: pathName === '/transacoes'
        },
        {
            href: 'configuracoes',
            label: 'Configurações',
            icon: <FiSettings />,
            active: pathName === '/configuracoes'
        }
    ]


    return (
        <div className='flex flex-col'>
            <nav className='flex flex-col gap-10'>
                {routes.map((item) => (
                    <Link
                        key={item.label}
                        className={`hover:opacity-80 flex items-center border-l-4 border-transparent gap-2 ${item.active ? 'text-white' : ' text-gray-400 '} ${item.active && 'border-l-4 border-l-white'} `}
                        href={item.href}
                    >
                        <span className='pl-4'>{item.icon}</span>
                        {isVisible && <span>{item.label}</span>}
                    </Link>
                ))}

            </nav>
        </div>
    )
}

export default MainNav