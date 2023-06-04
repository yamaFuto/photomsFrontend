import Image from 'next/image'
import {useRouter} from "next/router"
import { useState } from "react";
import ModalContent from "@/components/modalContent";
import Header from "@/components/header"

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
    <Header action={setIsOpen} />

      <div className="container max-[600px]:ml-20 max-[600px]:w-96 ml-40 mt-10 flex pb-0 border-b-2 w-4/12">
        <button className="group mr-8 text-2xl pl-2">
          image
          <div className="bg-teal-800 h-1 rounded-md duration-100"></div>
        </button>
        <button onClick = {() => router.push("/wallpaper")} className="group text-2xl">
          wallpaper
          <div className="group-hover:bg-teal-300 h-1 rounded-md duration-100"></div>
        </button>
        <button onClick={() => router.push("/several")} className="group max-[600px]:ml-2 ml-8 text-2xl">
          several images
          <div className="group-hover:bg-teal-300 h-1 rounded-md"></div>
        </button>
      </div>

      <select className="mt-8 ml-44 text-xl border-2 p-1 rounded-lg">
        <option value="">select genre</option>
        <option value="sports" >sports</option>
        <option value="cooking" >cooking</option>
        <option value="politics" >politics</option>
        <option value="economy" >economics</option>
        <option value="outdoor" >outdoor</option>
        <option value="trip" >trip</option>
        <option value="animal" >animals</option>
        <option value="game" >game</option>
        <option value="comic" >manga</option>
        <option value="anime" >anime</option>
        <option value="others" >the others</option>
      </select>

      <ol className="w-6/12 grid grid-cols-3 gap-y-4 gap-x-4 mt-12 mx-auto pt-2 border-t-2">
        <li><Image className="hover:scale-105 duration-100 rounded-md" width="300" height="300" alt="image" src="/images/300x300mono.png" /></li>
        <li><Image className="hover:scale-105 duration-100 rounded-md" width="300" height="300" alt="image" src="/images/300x300mono.png" /></li>
        <li><Image className="hover:scale-105 duration-100 rounded-md" width="300" height="300" alt="image" src="/images/300x300mono.png" /></li>
        <li><Image className="hover:scale-105 duration-100 rounded-md" width="300" height="300" alt="image" src="/images/300x300mono.png" /></li>
        <li><Image className="hover:scale-105 duration-100 rounded-md" width="300" height="300" alt="image" src="/images/300x300mono.png" /></li>
        <li><Image className="hover:scale-105 duration-100 rounded-md" width="300" height="300" alt="image" src="/images/300x300mono.png" /></li>
      </ol>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}