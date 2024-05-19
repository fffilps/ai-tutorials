import Head from 'next/head'
import React from 'react'


type Props = {
    title: string
}

const LessonHeader = ({title}: Props) => {
  return (
    <div className='p-4 flex flex-col gap-2'>
        <Head>
        <link rel="stylesheet" href="https://use.typekit.net/bpr1oqd.css"/>
        </Head>
        <h1 className='text-5xl font-Baskerville-Display-PT-Regular font-semibold italic p-4'>{title}</h1>
        <h3 className='text-xl font-semibold'>Welcome to the world of AI (Artifical Intellgence)</h3>
        <p className='text-lg'>AI is an umbrella term for a lot of things such as ML (Maching Learning - Ex: Your phone learning how you type)
        </p>
        <p className='text-lg'>AI refers to the ability of machines and computers to perform tasks that would normally require human intelligence. These tasks include things like recognizing patterns and making predictions.</p>
    </div>
  )
}

export default LessonHeader