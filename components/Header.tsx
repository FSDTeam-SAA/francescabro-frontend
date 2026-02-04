// import Image from "next/image";

// export function Header() {
//   return (
//     <header className="border-b border-border bg-[#FFFFFF]">
//       <div className="flex items-center justify-center ">
//        <Image
//           src="/assets/logo.png"
//           alt="Logo"
//           width={10000}
//           height={10000}
//           className=" w-[266px] py-3  object-cover"
//         />
//       </div>

//     </header>
//   )
// }


import Image from "next/image";

export function Header() {
  return (
    <header className=" bg-white/20 backdrop-blur-sm">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[200px] py-3 object-contain"
        />
      </div>
    </header>
  );
}
