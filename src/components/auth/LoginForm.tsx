import { Card } from 'primereact/card'
import React from 'react'
import { IconGoogle } from '@/components/common/Icons'

type Props = {}

export default function LoginForm({}: Props) {
  return (
    <section className='flex w-full h-full justify-center items-center'>
      <Card className='flex justify-center flex-col items-center rounded shadow gap-4 border border-red-500 p-4'>
        <h2 className='text-2xl text-center'>!Bienvenido!</h2>
        <p className='text-xl'>Inicia sesión para acceder al sitio</p>
        <button className='bg-[#0b2781] w-full px-4 py-2 rounded-lg flex gap-4 justify-center text-xl'>
          <IconGoogle height={30} width={30}/>
          Inicia sesion con Google
        </button>
      </Card>
    </section>
  )
}