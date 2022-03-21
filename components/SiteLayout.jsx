import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';
import { MdClose, MdEmail } from 'react-icons/md';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const socialLinks = [
  {name: 'LinkedIn', icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/davisokioma"},
  {name: 'GitHub', icon: <FaGithub/>, link: "https://github.com/dauddi"},
  {name: 'Twitter', icon: <FaTwitter/>, link: "https://twitter.com/ddauddi"},
]

const navLinks = [
  {name: 'About', route: "/about"},
  {name: 'Work', route: "/work"},
  {name: 'Services', route: "/services"},
  {name: 'Blog', route: "/blog"},
  {name: 'Contact', route: "/contact"},
]

const SiteLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='grid grid-cols-12 overflow-hidden items-center justify-center font-inter' >
      <header className='col-span-12 bg-white z-[1000]' >
        <nav className='col-span-8 h-[18vh] flex justify-start items-center font-bold ' >
          <div className='ml-36' >
            <Link href="/" >
              <a className='text-2xl' > dauddi. </a>
            </Link>
          </div>

          {/* <Link href="/contact" >
            <a className='text-gray-50 py-3 px-4 bg-purple-500 rounded-lg hover:bg-purple-600 ' > Say Hello </a>
          </Link> */}

          <div onClick={toggleMenu} className='fixed top-12 right-12 bg-gray-50 rounded-full p-3 border-[0.5px] z-[100] border-gray-50 hover:cursor-pointer ' >
            <HiMenuAlt2 className='text-3xl text-purple-900 ' />
          </div>
        </nav>

        { isMenuOpen && <BackdropOnMenuOpen toggleMenu={toggleMenu} /> }
        { isMenuOpen && <OffCanvasMenu toggleMenu={toggleMenu} /> }

      </header>

      <main className='col-span-12' >
        { children }
      </main>

      <footer className='flex flex-col gap-16 justify-between font-work p-36 min-h-screen bg-black text-gray-50 w-screen ' >
        <div className='ml-36 ' >
          <h1 className='text-7xl font-[600] ' >
            Lets Start <br />
            Something Great Together!
          </h1>

          <Link href="/contact">
            <a className=' bg-gray-50 text-gray-900 p-4 inline-block mt-16 font-[600] tracking-wide text-lg hover:bg-gray-100' > Get a Free Quote </a>
          </Link>
        </div>
        <div className='grid grid-cols-12 ml-36' >
          <div className='col-span-6 ' >
            <p>Drop me a line, and I&#39;ll be in touch.</p>
            <div className='text-2xl' >
              <div className='flex gap-4 mt-6 items-center' >
                <MdEmail />
                <p> Davisokioma@outlook.com </p>
              </div>
              <div className='flex gap-4 mt-6 items-center' >
                <BsTelephoneInboundFill />
                <p> +254791934993 </p>
              </div>
            </div>
          </div>
          <div className='col-span-6 ' >
          <p>Connect with me on social platforms.</p>
            <div className='text-lg' >
              { socialLinks.map(socialLink => (
                <div key={socialLink.name} className='flex gap-4 mt-6 items-center' >
                  {socialLink.icon}
                  <Link href={socialLink.link} >
                    <a target='_blank' > {socialLink.name} </a>
                  </Link>
                </div>
              )) }
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export const OffCanvasMenu = ({ toggleMenu }) => {
  return (
    <div className='fixed inset-0 md:left-[50vw] bg-black p-12 text-white shadow-3xl rounded-l-xl overflow-x-hidden font-work z-[1000] border-left-[0.5px] border-gray-50 ' >
      <div className='flex w-full justify-between items-center ' >
        <div>
          <Link href="/" >
            <a onClick={toggleMenu} className='text-2xl font-[700] ' > dauddi. </a>
          </Link>
        </div>

        <div onClick={toggleMenu} className='rounded-full p-3 border-[0.5px] bg-indigo-600 border-purple-900 hover:cursor-pointer ' >
          <MdClose onClick={toggleMenu} className='text-3xl text-white ' />
        </div>
      </div>

      <div className='w-full mt-12 flex justify-start ' >
        <div className='w-1/3 hidden md:block ' >
          <h2 className='text-xl text-gray-400 mb-6 font-[600] ' >Social</h2>
          <div className='flex flex-col gap-4' >
            { socialLinks.map(socialLink => (
              <Link key={socialLink.name} href={socialLink.link} >
                <a className='text-md font-[500] text-gray-50 ' target='_blank' > {socialLink.name} </a>
              </Link>
            )) }
          </div>
        </div>
        <div className='' >
          <h2 className='text-xl text-gray-400 mb-6 font-[600] ' >Menu</h2>
          <div className='flex flex-col gap-6' >
            { navLinks.map(navLink => (
              <Link key={navLink.name} href={navLink.route} >
                <a onClick={toggleMenu} className='text-6xl text-gray-50 ' > {navLink.name} </a>
              </Link>
            )) }
          </div>
        </div>
      </div>
      <div className='fixed bottom-16' >
        <h3 className='text-xl mb-4 text-gray-400 font-[600] ' >Get In Touch</h3>
        <p className='text-2xl font-[500s] text-purple-50 ' >davisokioma@outlook.com</p>
      </div>
    </div>
  )
}

export const BackdropOnMenuOpen = ({ toggleMenu }) => {
  return (
    <div onClick={toggleMenu} className='fixed inset-0 backdrop-blur-sm min-h-[100vh] min-w-[100vw] w-full h-full z-50' >
      .
    </div>
  )
}

export default SiteLayout