import Image from 'next/image'
import {useRouter} from "next/router"

export default function Wallpaper() {
  const router = useRouter();
  return (
    <>
      <div className=" flex justify-center mt-3 border-b-2 pb-3">
        <div className="italic text-3xl mr-48 max-[400px]:m-0">Logo</div>
        {/* <Image alt="logo" src="https://placehold.jp/70x50.png" className="mr-48 max-[400px]:m-0" /> */}
        <input id="clearbutton2" type="search" placeholder="serach" className="bg-slate-100 rounded-lg px-2 py-0 w-96 relative focus:outline-none max-[800px]:hidden"></input>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 px-1 hover:bg-slate-400 max-[800px]:hidden rounded-lg ml-1 p-1 pt-2 mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <button className="bg-teal-400 hover:bg-teal-700 duration-200 p-2 py-1 rounded-lg font-semibold text-xl text-zinc-100 ml-40 max-[600px]:ml-20 mt-2">Post</button>
      </div>

      <div className="container max-[600px]:ml-20 max-[600px]:w-96 ml-40 mt-10 flex pb-0 border-b-2 w-4/12">
        <button onClick = {() => router.push("/")} className="group mr-8 text-2xl pl-2">
          image
          <div className="group-hover:bg-teal-300 h-1 rounded-md duration-100"></div>
        </button>
        <button className="group text-2xl">
          wallpaper
          <div className="bg-teal-800 h-1 rounded-md duration-100"></div>
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
    </>
  )
}