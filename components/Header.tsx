import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-border bg-[#FFFFFF]">
      <div className="flex items-center justify-center ">
       <Image
          src="/assets/logo.jpeg"
          alt="Logo"
          width={10000}
          height={10000}
          className=" w-[266px] py-3  object-cover"
        />
      </div>
    
    </header>
  )
}
