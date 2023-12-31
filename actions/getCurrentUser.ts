import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession()

        if (!session?.user?.name) {
            return null
        }

        const currentUser = await prisma?.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null as any
        }

        return currentUser
    }
    catch (error) {
        return null
    }
}