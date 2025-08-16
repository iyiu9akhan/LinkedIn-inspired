import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Container from '../components/Container';

function Home() {
  return (
    <div>
      <div className='bg-white'>
        <Container>
          <header className='py-2'>
            <div >
              <FaLinkedin size={38} className='text-linkedin_blue' />
            </div>
          </header>
        </Container>
      </div>
      <div className='bg-[#F4F2EE]'>
        <Container>
          fasdg
        </Container>
      </div>
    </div>
  )
}

export default Home