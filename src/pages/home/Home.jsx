import React from 'react'
import Layout from '../../layout/Layout'
import IntroSection from './componentsOfHome/introSection/IntroSection'
import SectionVideo from './componentsOfHome/introSection/sectionVideo/SectionVideo'
import HighPerformance from './componentsOfHome/introSection/highPerformance/HighPerformance'
import DummySeciton from './componentsOfHome/dummsection/DummySeciton'

const Home = () => {
  return (
    <Layout>
        <IntroSection/>
        <SectionVideo/>
        <HighPerformance/>
        <DummySeciton/>
    </Layout>
  )
}

export default Home
