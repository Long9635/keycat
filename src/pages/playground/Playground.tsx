import React, { useEffect } from 'react'
import { Router } from '@reach/router'
import PageLayout from 'design/layouts/PageLayout'
import PlaygroundHeader from './PlaygroundHeader'
import Donate from './Donate'
import { Route } from 'design/moles/Route'
import HashTalk from './hash-talk/HashTalk'
import { usePlayground } from 'hooks/playgroundHooks'
import { useStore } from 'store/store'
import Instructor from './instructor/Instructor'

interface IProps {
  path: string
}

const Playground: React.FunctionComponent<IProps> = () => {
  const {
    play: { init },
  } = useStore()
  const { fetchBlockchains } = usePlayground()

  useEffect(() => {
    !init && fetchBlockchains()
  }, [])

  if (!init) return null

  return (
    <PageLayout
      header={<PlaygroundHeader />}
      main={
        <Router path="playground">
          <Route path="ethereum" component={Instructor} />
          <Route path="hash-talk" component={HashTalk} />
          <Route default component={Donate} />
        </Router>
      }
    />
  )
}

export default Playground
