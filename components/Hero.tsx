
'use client'

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-[300px] sm:h-[520px] md:h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/hero11.jpg)',
          backgroundPosition: 'center',
        }}
      >
        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
        {/* Badge */}
        <div
          className="
    mb-4
    inline-block
    rounded-full
    border
    bg-white/10

    px-4 py-2
    sm:px-5 sm:py-2
    md:px-8 md:py-3

    text-xs
    sm:text-sm
    md:text-lg
    lg:text-2xl

    font-medium
    text-center
    whitespace-nowrap
  "
        >
          Born in Sardinia, made for the sea
        </div>

        {/* Title */}
        <h1 className="text-[16px] sm:text-[28px] md:text-5xl lg:text-[36px] font-medium mb-4 sm:mb-5 md:mb-6 text-balance leading-tight">
          Nautical excellence entirely from Sardina
        </h1>

        {/* Sub points */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center text-[12px] sm:text-[14px] md:text-[24px] mb-6 md:mb-8 text-white font-normal">
          <span>Fleet handling specialists</span>
          <span className="hidden md:inline">•</span>
          <span>Technical assistance excellence</span>
          <span className="hidden md:inline">•</span>
          <span>Professional nautical charter</span>
        </div>

        {/* Button */}
        <Link href="#footer">
          <button className="bg-[#FFFFFF] text-[#000000E5] text-[16px] sm:text-[18px] md:text-[32px] font-medium px-6 sm:px-8 md:px-10 h-10 sm:h-14 md:h-[70px] rounded-lg hover:bg-gray-100 transition">
            Contact
          </button>
        </Link>
      </div>
    </section>
  )
}
