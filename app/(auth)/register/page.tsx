'use client'
import { useForm } from 'react-hook-form'
import z from 'zod'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const createUserSchema = z.object({
    name: z.string({ required_error: 'o nome é obrigatório' }).min(4, 'O nome precisa de 4 letras'),
    email: z.string({ required_error: 'o e-mail é obrigatório' }).email('Formato de e-mail inválido'),
    password: z.string().min(4, 'A senha precisa de no mínimo 4 caracteres')
})

type TcreateUserSchema = z.infer<typeof createUserSchema>

const page = () => {
    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<TcreateUserSchema>({ resolver: zodResolver(createUserSchema) })

    const OnSubmit = (data: TcreateUserSchema) => {
        axios.post('/api/register', data)
            .then(() => {
                toast.success('Conta criada com sucesso')
                push('/login')

            })
            .catch((e) => {
                console.log('ERRO NO REGISTER', e)
            })
    }

    return (
        <div className="flex gap-2 flex-col h-screen w-full items-center justify-center ">
            <div className="flex sm:max-w-2xl max-w-sm w-full flex-col sm:shadow bg-white sm:border border-0 p-8 items-center rounded-md mx-2">
                <h1 className="text-3xl font-medium my-2">Crie sua conta</h1>
                <form className="flex gap-5 flex-col w-full max-w-xs" onSubmit={handleSubmit(OnSubmit)}>
                    <div className="flex flex-col gap-1">
                        <label>Nome</label>
                        <input className="border rounded py-2 px-1" type="text" placeholder="Digite seu nome" {...register('name')} />
                        {errors.name?.message}
                    </div>
                    <div className="flex flex-col  gap-1">
                        <label >E-mail</label>
                        <input className="border rounded py-2 px-1" type="text" placeholder="Digite seu e-mail" {...register('email')} />
                        {errors.email?.message}
                    </div>
                    <div className="flex flex-col  gap-1">
                        <label >Senha</label>
                        <input className="border rounded py-2 px-1" type="password" placeholder="Digite sua senha" {...register('password')} />
                        {errors.password?.message}
                    </div>
                    <button className="bg-[#232323] text-white rounded py-2 px-1 hover:bg-black/70">Criar conta</button>
                    <hr />
                    <span className="text-center">Ou</span>
                    <hr />
                    <Link href="/login" className="text-center border rounded py-2 px-1 hover:bg-[#f7f7f7]">Faça login!</Link>
                </form>
            </div>
        </div >
    )
}

export default page     