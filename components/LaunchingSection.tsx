
// import Image from "next/image"

// export function LaunchingSection() {
//   return (
//     <section className="py-12 md:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

//           {/* Left Column */}
//           <div>
//             <p className="text-[#000000] md:text-[32px] font-semibold mb-4 text-center md:text-left">
//               Sardinia's nautical excellence is
//             </p>

//             <h2 className="text-4xl md:text-5xl lg:text-[70px] font-semibold mb-6 text-[#000000] text-center md:text-left">
//               launching soon
//             </h2>

//             <p className="text-base text-[#000000] font-normal mb-8 leading-relaxed text-center md:text-left">
//               Lorem ipsum dolor sit amet consectetur. Amet adipiscing platea
//               rutrum cursus nibh elementum. Id orci nulla in sed aliquam
//               elementum tincidunt itricies.
//             </p>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-6 md:gap-14 ">

//               {/* Stat 1 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl md:text-[96px] font-extrabold text-[#000000E5] ">
//                     15
//                   </span>
//                   <span className="absolute top-5 right-[100px] md:top-7 md:right-[140px] text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-[#000000E5] text-xs md:text-base mt-7">
//                   Years Experience
//                 </p>
//               </div>

//               {/* Stat 2 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl md:text-[96px] font-extrabold text-[#000000E5]">
//                     40
//                   </span>
//                   <span className="absolute top-5 right-[90px] md:top-7 md:right-[110px] text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-[#000000E5] text-xs md:text-base mt-7">
//                   Boats under Management
//                 </p>
//               </div>

//               {/* Stat 3 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl md:text-[96px] font-extrabold text-[#000000E5]">
//                     10k
//                   </span>
//                   <span className="absolute top-5 right-[85px] md:top-7  md:right-[70px] text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-[#000000E5] text-xs md:text-base mt-7">
//                   Satisfied Clients
//                 </p>
//               </div>

//               {/* Stat 4 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl md:text-[96px] font-extrabold text-[#000000E5]">
//                     24/7
//                   </span>
//                   <span className="absolute top-5 right-[60px] md:top-7  md:right-[35px] text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-[#000000E5] text-xs md:text-base mt-7">
//                   Technical Assistance
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* Right Column - Image */}
//           <div className="flex justify-center">
//             <div className="overflow-hidden w-full max-w-sm h-[380px]">
//               <Image
//                 src="/assets/lunch.png"
//                 width={1000}
//                 height={1000}
//                 alt="Launching Soon"
//                 className="w-full h-auto md:h-full object-cover"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }



import Image from "next/image"

export function LaunchingSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-[#000000] md:text-[32px] font-semibold mb-4 text-center md:text-left">
              Sardinia&apos;s nautical excellence is
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-[70px] font-semibold mb-6 text-[#000000] text-center md:text-left">
              launching soon
            </h2>

            <p className="text-base text-[#000000] font-normal mb-8 leading-relaxed text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Amet adipiscing platea
              rutrum cursus nibh elementum. Id orci nulla in sed aliquam
              elementum tincidunt itricies.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-14">
              {/* Stat 1 */}
              <div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl md:text-[72px] lg:text-[96px] font-extrabold text-[#000000E5] leading-none">
                    15
                  </span>

                  {/* Mobile/LG: same look, MD: stable position */}
                  <span className="mb-3 md:mb-4 lg:mb-5 translate-y-[-6px] md:translate-y-[-2px] lg:translate-y-0 text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
                    +
                  </span>
                </div>

                <p className="text-[#000000E5] text-xs md:text-base mt-7">
                  Years Experience
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl md:text-[72px] lg:text-[96px] font-extrabold text-[#000000E5] leading-none">
                    40
                  </span>
                  <span className="mb-3 md:mb-4 lg:mb-5 translate-y-[-6px] md:translate-y-[-2px] lg:translate-y-0 text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
                    +
                  </span>
                </div>

                <p className="text-[#000000E5] text-xs md:text-base mt-7">
                  Boats under Management
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl md:text-[72px] lg:text-[96px] font-extrabold text-[#000000E5] leading-none">
                    10k
                  </span>
                  <span className="mb-3 md:mb-4 lg:mb-5 translate-y-[-6px] md:translate-y-[-2px] lg:translate-y-0 text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
                    +
                  </span>
                </div>

                <p className="text-[#000000E5] text-xs md:text-base mt-7">
                  Satisfied Clients
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl md:text-[72px] lg:text-[96px] font-extrabold text-[#000000E5] leading-none">
                    24/7
                  </span>
                  <span className="mb-3 md:mb-4 lg:mb-5 translate-y-[-6px] md:translate-y-[-2px] lg:translate-y-0 text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 md:w-10 md:h-10 flex items-center justify-center">
                    +
                  </span>
                </div>

                <p className="text-[#000000E5] text-xs md:text-base mt-7">
                  Technical Assistance
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="overflow-hidden w-full max-w-sm h-[380px]">
              <Image
                src="/assets/lunch.png"
                width={1000}
                height={1000}
                alt="Launching Soon"
                className="w-full h-auto md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
