import React from 'react'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col '>
        <h1 className='head_text text-center'>Discover and Share</h1>
        <br className='max-ms:hidden'/>
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
        <p className='desc text-center'>Promptopia is an open-source AI promptimg tool for modern world to discover,
            create and share creative prompts
        </p>
        <Feed />
    </section>
  )
}

export default Home
