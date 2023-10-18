import prisma from "@/libs/prisma"
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {

    const body = await request.json()

    const { name, email, password } = body

    const exist = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (exist) {
        throw new Error('Esse e-mail já existe')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const createUser = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword: hashPassword
        }
    })

    return NextResponse.json(createUser)
}