import React from 'react'
import LessonHeader from './LessonHeader'
import CivitaiLesson from './CivitaiLesson'
CivitaiLesson

type Props = {}

const MainTutorialSection = (props: Props) => {
  return (
    <div className='p-4 bg-slate-100 w-full'>
      <LessonHeader title='Introduction'/>
      <CivitaiLesson />
    </div>
  )
}

export default MainTutorialSection