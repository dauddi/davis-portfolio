import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Head>
          <title>Home | Dauddi</title>
          <meta name="description" content="Davis Okioma's portfolio website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" " >
          <section className='grid grid-cols-5 items-center min-h-[65vh] ml-36 '>
            <div className='col-span-3 ' >
              <h1 className='text-5xl font-[700] mb-10 text-gray-800 ' >Hi! My name is Davis.</h1>
              <h2 className='text-4xl font-[400] leading-snug tracking-wide font-work text-gray-700 ' >
                I work with brands to develop web experiences that keep users engaged.
                My work is focused on creating intuitive and user-friendly websites that make your visitors want to stick around.
              </h2>
            </div>
            <div className='col-span-2 hidden md:block '>
              <Image src='/artwall.jpg' width={520} height={660} alt="Art wall" />
            </div>
          </section>

          <section className='grid grid-cols-12 min-h-screen bg-black items-center font-inter mt-[-6] ' >
            <div className='col-span-6 ml-36 text-2xl leading-loose z-10 font-[400] text-gray-100 ' >
              <p className='mb-6 tracking-widest text-gray-400' > *** </p>
              <h3 className='mb-12 tracking-widest' >
                Finding the perfect balance between design and functionality can be challenging.
                <span className='block mt-8 tracking-widest ' >
                I help my clients discover what works for their brand and deliver solutions 
                that are both aesthetically pleasing and funtion like a charm. 
                </span>
              </h3>
              <Link href='/process' >
                <a className='bg-gray-100 p-4 text-gray-900 font-[600] text-lg tracking-wide ' > My Engineering Process </a>
              </Link>
            </div>
            {/* <div className='col-span-5 ' >
              <Image className='rounded-full ' src='/balance.jpg' layout='intrinsic' width={480} height={500} alt="balance svg" />
            </div> */}
          </section>

          <section className='h-[80vh] grid grid-cols-12 items-center ' >
            <div className='col-span-5 ml-36 ' >
              <Image className='rounded-full ' src='/time.jpg' width={420} height={560} layout='intrinsic' alt='globe image' />
            </div>

            <div className='col-span-5 font-work space-y-12 ' >
              <h1 className='text-4xl font-[600] ' > Different timezone? Not a problem. </h1>
              <p className='text-2xl font-[300] leading-loose ' > 
                I work with brands and engineering teams across multiple timezones.
                <br />
                I manage to remain in sync with my clients and team members throughout the project timeline. 
                Borderless is the new normal.
              </p>

              <Link href='#' >
                <a className='bg-black text-gray-50 p-4 inline-block mt-8 font-[500] tracking-wide text-lg ' > Got a project? Let&#39;s Chat </a>
              </Link>
            </div>
          </section>

          <section className='min-h-screen grid grid-cols-12 items-center bg-gray-50 ' >
            <div className='col-span-8 ml-36' >
              <h1 className='text-5xl font-[700] ' > Testimonials </h1>
              <p className='text-3xl leading-relaxed mt-24 font-[300] text-gray-700 ' >
                Davis follows a simple work philosophy. What he does is driven by passion.
                He believes in successfully delivering every project we had and he did. Every
                one of our clients – be it a major brand or a budding startup – is important for him. He
                is trustworthy, you can rely on him to have projects
                delivered on time with guaranteed quality. I have experience working
                with several other software developers but he truly stands out.
              </p>
              <p className='text-xl mt-10 font-[400] ' >
                Sadiya Backer | Project Manager, UCPro  
              </p>
            </div>
          </section>

          <section className='flex flex-col items-center justify-center min-h-[80vh] mx-auto ' >
            <div className='text-3xl tracking-wider font-[500] text-gray-700 ' >
              <h1 className='text-2xl font-[700] ' > I BUILD </h1>
                <br />
              <p className='leading-loose ' >
                <span className='text-gray-900 font-[700] text-3xl ' >BRANDS</span> gets your noticed.
                <br />
                <span className='text-gray-900 font-[700] text-3xl  ' >LANDING PAGES</span> that convert.
                <br />
                <span className='text-gray-900 font-[700] text-3xl  ' >WEB APPS</span> that perform at scale.
              </p>

              <Link href='/services' >
                <a className='bg-black text-gray-50 p-4 inline-block mt-8 font-[500] tracking-wide text-lg ' > Explore my Services </a>
              </Link>
            </div>
          </section>
        </main> 
      </div>
  )
}
