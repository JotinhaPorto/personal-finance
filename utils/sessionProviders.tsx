'use client'
import { SessionProvider } from "next-auth/react"

type ProviderProps = {
    children: React.ReactNode
}

const sessionProvider = ({ children }: ProviderProps) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default sessionProvider