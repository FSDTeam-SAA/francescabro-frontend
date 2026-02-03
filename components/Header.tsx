import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-border bg-[#FFFFFF]">
      <div className="flex items-center justify-center ">
       <Image
          src="/assets/logo.png"
          alt="Logo"
          width={10000}
          height={10000}
          className=" w-[266px] h-[60px] object-cover"
        />
      </div>
    
    </header>
  )
}
