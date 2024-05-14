import { useState } from 'react'
import './App.css'

// Components
import Spacer from './components/Spacer'

// Transition Images
import layer1 from './assets/backgrounds/layer1.svg'
import layer2 from './assets/backgrounds/layer2.svg'
import layer3 from './assets/backgrounds/layer3.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div name='container' className='w-screen h-screen snap-mandatory snap-y overflow-scroll -z-50'>
        <section name='heroSection' className='flex justify-center items-center w-screen h-screen snap-center  text-black text-4xl -z-25'>
          <LandingPage />
          <NavDown first={true} next='about me' />
        </section>

        <Spacer image={layer1} />

        <section name='aboutMe' className='flex justify-center items-center w-screen h-screen snap-center bg-slate-200 text-black text-4xl'>2</section>
        
        <Spacer image={layer2} />
        
        <section name='skills' className='flex justify-center items-center w-screen h-screen snap-center bg-slate-800 text-black text-4xl'>3</section>
        
        <Spacer image={layer3} />
        
        <section name='projects' className='flex justify-center items-center w-screen h-screen snap-center bg-slate-200 text-black text-4xl'>4</section>
        
        <section name='activeProject' className='flex justify-center items-center w-screen h-screen snap-center bg-green-300 text-black text-4xl'>5</section>
      </div>
    </>
  )
}

export default App
