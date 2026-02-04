
// import Image from "next/image"

// export function LaunchingSection() {
//   return (
//     <section className="py-12 md:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

//           {/* Left Column */}
//           <div>
//             <p className="text-[#000000] lg:text-[32px] font-semibold mb-4 text-center md:text-left">
//               Mediterranean nautical craftsmanship, redefined.
//             </p>

//             <h2 className="text-4xl md:text-4xl lg:text-[70px] font-semibold mb-6 text-[#000000] text-center md:text-left">
//               Launching soon!
//             </h2>

//             <p className="text-base text-[#000000] mt10 font-normal mb-8 leading-relaxed text-center md:text-left">
//               Built on advanced nautical expertise.
//               A new destination dedicated to nautical materials, expertise, and innovation.
//               From essential components to advanced marine solutions, we bring together quality, performance,
//               and island know-how for professionals and sea lovers worldwide.
//             </p>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-6 md:gap-14 ">

//               {/* Stat 1 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl lg:text-[96px] font-extrabold text-[#000000E5] ">
//                     15
//                   </span>
//                   <span className="absolute top-5 right-[100px] lg:top-7 md:right-[75px] lg:right-[140px] text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-[#000000E5] text-xs lg:text-base mt-7">
//                   Years Experience
//                 </p>
//               </div>

//               {/* Stat 2 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl lg:text-[96px] font-extrabold text-[#000000E5]">
//                     40
//                   </span>
//                   <span className="absolute top-5 right-[90px] lg:top-7 md:right-[65px] lg:right-[110px] text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-[#000000E5] text-xs lg:text-base mt-7 text-nowrap">
//                   Boats under Management
//                 </p>
//               </div>

//               {/* Stat 3 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl lg:text-[96px] font-extrabold text-[#000000E5]">
//                     10k
//                   </span>
//                   <span className="absolute top-5 right-[85px] lg:top-7 md:right-[50px]  lg:right-[70px] text-2xl bg-white text-[#F3AA1E] font-bold shadow-md rounded-full w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center">
//                     +
//                   </span>
//                 </div>
//                 <p className="text-[#000000E5] text-xs lg:text-base mt-7">
//                   Satisfied Clients
//                 </p>
//               </div>

//               {/* Stat 4 */}
//               <div>
//                 <div className="relative flex items-baseline gap-1 mb-2">
//                   <span className="text-4xl lg:text-[96px] font-extrabold text-[#000000E5]">
//                     24/7
//                   </span>

//                 </div>
//                 <p className="text-[#000000E5] text-xs lg:text-base mt-7">
//                   Technical Assistance
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* Right Column - Image */}
//           <div className="flex justify-center">
//             <div className="overflow-hidden w-full max-w-sm h-[380px] rounded-[10px]">
//               <Image
//                 src="/assets/image2.jpg"
//                 width={1000}
//                 height={1000}
//                 alt="Launching Soon"
//                 className="w-full h-auto md:h-full object-cover "
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }



import Image from "next/image";

export function LaunchingSection() {
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <p className="text-[20px] md:text-[28px] font-semibold mb-3">
              Mediterranean nautical craftsmanship, redefined.
            </p>

            <h2 className="text-[40px] md:text-[64px] font-semibold mb-5">
              Launching soon!
            </h2>

            <p className="text-sm md:text-base leading-relaxed mb-8">
              Built on advanced nautical expertise. A new destination dedicated to nautical materials,
              expertise, and innovation. From essential components to advanced marine solutions, we bring together
              quality, performance, and island know-how for professionals and sea lovers worldwide.
            </p>

          </div>

          {/* Right */}
          <div className="flex justify-center">
            <Image
              src="/assets/image2.jpg"
              width={800}
              height={800}
              alt="Launching Soon"
              className="rounded-lg object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
