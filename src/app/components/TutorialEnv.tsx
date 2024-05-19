import { WebContainer } from '@webcontainer/api'
import React from 'react'


type Props = {}


const TutorialEnv = (props: Props) => {

    const webcontainerinstance = async () => await WebContainer.boot()

  return (
    <div>
        <h3>Tutorial Environment</h3>

    </div>
  )
}

export default TutorialEnv