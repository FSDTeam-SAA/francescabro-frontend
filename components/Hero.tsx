// 'use client'

// export function HeroSection() {
//   return (
//     <section className="relative w-full h-96 md:h-[680px] flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(/assets/hero.jpg)',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Overlay */}
//         {/* <div className="absolute inset-0 bg-black/30"></div> */}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 md:px-8">
//         <div className="mb-4 text-sm md:text-[32px] font-medium  bg-[#FFFFFF1C]/10 px-4 py-[11px] rounded-full inline-block">
//           Born in Sardinia, made for the sea
//         </div>
        
//         <h1 className="text-3xl md:text-5xl lg:text-[36px] font-midium mb-6 text-balance">
//          Nautical excellence entirely from Sardina
//         </h1>
        
//         <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center text-sm md:text-[24px] mb-8 text-white font-normal">
//           <span>Fleet handling specialists</span>
//           <span className="hidden md:inline">•</span>
//           <span>Technical assistance excellence</span>
//           <span className="hidden md:inline">•</span>
//           <span>Professional nautical charter</span>
//         </div>

//         <button className="bg-[#FFFFFF] text-[#000000E5] text-[32px] font-medium px-8 md:px-10 h-[70px]  rounded-lg  hover:bg-gray-100 transition">
//           Contact
//         </button>
//       </div>
//     </section>
//   )
// }




'use client'

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
        <div className="mb-4 border inline-block rounded-full bg-[#FFFFFF1C]/10 px-4 py-[11px] sm:px-5 sm:py-[10px] text-[12px] sm:text-sm md:text-[32px] font-medium">
          Born in Sardinia, made for the sea
        </div>

        {/* Title */}
        <h1 className="text-[22px] sm:text-[28px] md:text-5xl lg:text-[36px] font-medium mb-4 sm:mb-5 md:mb-6 text-balance leading-tight">
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
        <button className="bg-[#FFFFFF] text-[#000000E5] text-[16px] sm:text-[18px] md:text-[32px] font-medium px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:h-[70px] rounded-lg hover:bg-gray-100 transition">
          Contact
        </button>
      </div>
    </section>
  )
}
