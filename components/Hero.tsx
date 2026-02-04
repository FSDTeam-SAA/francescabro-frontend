// 'use client'

// import { RequestQuoteModal } from "./contactusmodal"
// import React from "react";

// export function HeroSection() {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <section className="relative w-full h-[300px] sm:h-[520px] md:h-[680px] flex items-center justify-center overflow-hidden">

//       {/* Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="https://res.cloudinary.com/dwleppd1x/video/upload/v1770200573/202602041613_kuumcj.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Optional overlay */}
//       {/* <div className="absolute inset-0 bg-black/30 z-0"></div> */}

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">

//         {/* Badge */}
//         <div
//           className="
//             mb-4 inline-block rounded-full border bg-white/10
//             px-4 py-2 sm:px-5 sm:py-2 md:px-8 md:py-3
//             text-xs sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl
//             font-medium text-center whitespace-nowrap
//           "
//         >
//           Born in Sardinia, made for the sea
//         </div>

//         {/* Title */}
//         <h1 className="text-[16px] sm:text-[28px] md:text-5xl lg:text-[32px] 2xl:text-[36px] font-medium mb-4 sm:mb-5 md:mb-6 leading-tight">
//           Nautical excellence entirely from Sardina
//         </h1>

//         {/* Sub points */}
//         <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center text-[12px] sm:text-[14px] md:text-[24px] mb-6 md:mb-8 font-normal">
//           <span>Fleet handling specialists</span>
//           <span className="hidden md:inline">•</span>
//           <span>Technical assistance excellence</span>
//           <span className="hidden md:inline">•</span>
//           <span>Professional nautical charter</span>
//         </div>

//         {/* Button */}
//           <button
//           onClick={()=>setOpen(true)}
//             className="
//               bg-white text-black text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[32px]
//               font-medium
//               px-4 sm:px-6 2xl:px-10
//               h-8 sm:h-10 lg:h-[50px] 2xl:h-[70px]
//               rounded-lg
//               hover:bg-gray-100 transition
//             "
//           >
//             Contact
//           </button>
//       </div>
//       <RequestQuoteModal open={open} setOpen={setOpen} />
//     </section>
//   )
// }


'use client'

import React from "react";
import { RequestQuoteModal } from "./contactusmodal";

export function HeroSection() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="relative w-full h-[320px] sm:h-[520px] md:h-[680px]  flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dwleppd1x/video/upload/v1770200573/202602041613_kuumcj.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 text-center mt-14 lg:mt-0 text-white px-4">

        {/* Badge */}
        <div className="mb-4 inline-block rounded-full border bg-white/10 px-4 py-2 text-xs sm:text-sm md:text-base font-medium">
          Born in Sardinia, made for the sea
        </div>

        {/* Title */}
        <h1 className="text-[18px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-medium mb-4">
          Nautical excellence entirely from Sardinia
        </h1>

        {/* Sub Text */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-[12px] sm:text-[14px] md:text-[16px] mb-6">
          <span>Fleet handling specialists</span>
          <span className="hidden md:inline">•</span>
          <span>Technical assistance excellence</span>
          <span className="hidden md:inline">•</span>
          <span>Professional nautical charter</span>
        </div>

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black text-[13px] sm:text-[14px] lg:text-[16px]
                     px-5 h-9 rounded-md hover:bg-gray-100 transition"
        >
          Contact
        </button>

      </div>

      <RequestQuoteModal open={open} setOpen={setOpen} />
    </section>
  );
}
