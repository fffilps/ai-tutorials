import React from 'react'
import * as fal from "@fal-ai/serverless-client"

type Props = {}

const FalLesson = (props: Props) => {

    fal.config({
        credentials: process.env.NEXT_PUBLIC_FALAI_API_KEY
    })

    const result = async () => await fal.run('user/app-alias')
    console.log(result)
    

  return (
    <div>FalLesson</div>
  )
}

export default FalLesson