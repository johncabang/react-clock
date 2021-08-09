import React, { useContext } from 'react'
import Expandbar from '../components/Expandbar'
import Main from '../components/Main'

import { Content } from './ContentElements'
import Loading from '../components/Loading'
import { ClockContext } from '../context/ClockContext'

const Home = () => {
  const { dayTime, isLoading } = useContext(ClockContext)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Content dayTime={dayTime}>
          <Expandbar />
          <Main />
        </Content>
      )}
    </>
  )
}

export default Home
