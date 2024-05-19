import Image from 'next/image'
import React from 'react'

type Props = {}

const MainSideNavigation = (props: Props) => {
    let tutorialTabs = ['Introduction', 'Lesson 1', 'Lesson 2', 'Lesson 3', 'Tutorial 1']
  return (
    <div className='bg-gray-500 px-4 flex-col justify-evenly items-center'>
        <div className='flex justify-start items-center'>
            <Image src={"/Ai-tutorial-Logos.gif"} alt='AI Tutorial Logo Animation' height={250} width={250} />
        </div>
        <div className='flex flex-col'>
            <ol className='flex flex-col gap-1 justify-center items-start'>
                {tutorialTabs.map((tab, index) => (
                    <li className='hover:text-white' key={`${index}: ${tab}`}>{tab}</li>
                ))}
            </ol>
        </div>
    </div>
  )
}

export default MainSideNavigation