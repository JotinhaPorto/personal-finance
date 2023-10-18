'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FieldValues, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
const page = () => {

    const { push, refresh } = useRouter()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
        console.log(data)
        signIn('credentials', {
            ...data,
            redirect: false
        })
            .then((callback) => {
                if (callback?.ok) {
                    toast.success('Entrando...')
                    refresh()
                    push('/')
                }
                if (callback?.error) {
                    toast.error(`${callback?.error}`)
                }
            })
    }




    return (
        <div className="flex gap-2 flex-col h-screen w-full items-center justify-center ">
            <div className="flex sm:max-w-2xl max-w-sm w-full flex-col sm:shadow bg-white sm:border border-0 p-8 items-center rounded-md mx-2">
                <h1 className="text-3xl font-medium my-2">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col w-full max-w-xs">
                    <div className="flex flex-col  gap-1">
                        <label >E-mail</label>
                        <input className="border rounded py-2 px-1" type="text" placeholder="Digite seu e-mail" {...register('email')} />
                    </div>
                    <div className="flex flex-col  gap-1">
                        <label >Senha</label>
                        <input className="border rounded py-2 px-1" type="password" placeholder="Digite sua senha" {...register('password')} />
                    </div>
                    <button className="bg-[#232323] text-white rounded py-2 px-1 hover:bg-black/70">Entrar</button>
                    <hr />
                    <span className="text-center">Ou</span>
                    <hr />
                    <Link href="/register" className="text-center border rounded py-2 px-1 hover:bg-[#f7f7f7]">Crie sua conta</Link>
                </form>
            </div>
        </div >
    )
}

export default page     