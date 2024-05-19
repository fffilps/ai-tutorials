import React from 'react'

type Props = {}

const MainLessonBody = (props: Props) => {
    const topics = ['What is a model?', 'What is a prompt and how do I do it?', 'What is a negative prompt', 'Aspect Ratio and Aspect Ratio in Gen-AI', 'Scales', 'Sampler', 'Steps', 'VAE', 'Clip Skip', 'Seed']
  return (
    <div className='p-4'>
        <h3 className='text-xl font-semibold'>Things we will learn about:</h3>
        <ul>
            {topics.map((topic) => (
                <li className='text-lg underline' key={topic}>{topic}</li>
            ))}
        </ul>
    </div>
  )
}

export default MainLessonBody