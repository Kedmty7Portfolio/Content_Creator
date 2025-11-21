import Link from "next/link"
import Image from "next/image"
export default function Header() {
  return (
    <div dir="ltr" className={` h-20 w-full bg-[#000000d7] text-white
    flex justify-between items-center p-5`}>
     
  <div
          className={`logo w-[70px] h-[70px] relative overflow-hidden 
             rounded-full   flex justify-center items-center shrink-0
            bg-white border-4 border-black/55 
             `}
        >
          <Image
            src="/logo.png"
            alt="my pic"
            width={70}
            height={70}
           className="mt-12"
          />
    
        
      </div>
      <div className={`links flex items-center gap-5 text-lg  md:text-xl`}>
        <Link href={``}>عني</Link>
        <Link href={``}>سابقة أعمالي</Link>
      </div>
     
    </div>
  )
}
