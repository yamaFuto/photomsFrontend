import Link from "next/link";
import { FC } from "react";

type props = {
  action: (p: boolean) => void
}

const Header : FC<props> = ({action}) => {
  return (
    <>
      <div className=" flex justify-center mt-3 border-b-2 pb-3">
          <Link href="/" className="italic text-3xl mr-48 max-[400px]:m-0">Logo</Link>
          {/* <Image alt="logo" src="https://placehold.jp/70x50.png" className="mr-48 max-[400px]:m-0" /> */}
          <input id="clearbutton2" type="search" placeholder="serach" className="bg-slate-100 rounded-lg px-2 py-0 w-96 relative focus:outline-none max-[800px]:hidden"></input>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 px-1 hover:bg-slate-400 max-[800px]:hidden rounded-lg ml-1 p-1 pt-2 mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <button onClick={() => action(true)} className="bg-teal-400 hover:bg-teal-700 duration-200 p-2 py-1 rounded-lg font-semibold text-xl text-zinc-100 ml-40 max-[600px]:ml-20 mt-2">Post</button>
        </div>
    </>
  )
}

export default Header;