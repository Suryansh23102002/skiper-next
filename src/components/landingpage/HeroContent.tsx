'use client'

import React from 'react'
import WrapButton from '../ui/wrap-button'
import { Globe } from 'lucide-react'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <>
      <div className="flex flex-col items-center py-16 text-center text-foreground">
        <Image
          className="h-10 mb-14"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=806890&theme=light&t=1737565356562"
          alt="Product Hunt Badge"
          width={250}
          height={40}
        />
        <h3 className="leading-none text-4xl font-bold text-muted-foreground">
          Components crafted for
        </h3>
        <h1 className="text-[5.4rem] font-bold text-foreground">Modern Websites</h1>

        <WrapButton href="#" className="mt-8">
          <Globe className="animate-spin" />
          Getting Started
        </WrapButton>

        <svg
          width="100"
          height="50"
          viewBox="0 0 100 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2 mb-8 fill-foreground"
        >
          <path d="M68.6958 5.40679C67.3329..." />
        </svg>

        <p className="text-xl text-muted-foreground">
          To make your dream Website live by just{" "}
          <span className="font-bold text-foreground">Copy and paste</span>
        </p>
      </div>

      {/* Background decorative images */}
      <Image
        className="absolute left-24 top-80 h-[700px] pointer-events-none select-none"
        src="https://skiper-ui.com/bg/bg_1.svg"
        alt="bg-1"
        width={100}
        height={700}
      />
      <Image
        className="absolute right-24 top-80 h-[500px] pointer-events-none select-none"
        src="https://skiper-ui.com/bg/bg_2.svg"
        alt="bg-2"
        width={100}
        height={500}
      />
    </>
  )
}

export default HeroContent
