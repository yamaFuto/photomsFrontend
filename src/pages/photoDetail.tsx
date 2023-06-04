import Header from "@/components/header"
import Com from "@/components/com"
import Image from "next/image"
import { useState } from "react";
import ModalContent from "@/components/modalContent"

export default function PhotoDetail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Header action={setIsOpen} />
      <div className="flex max-[800px]:flex-col m-20 mb-2 h-96 max-[800px]:h-full">
        <Image alt="image" width="700" height="700" className="rounded-lg" src="/images/300x300mono.png" />
        <div className="min-[700px]:ml-10 mb-8">
          <h1 className="mb-2 text-3xl max-[640px]:mt-4">title</h1>
          <h2 className="max-[640px]:w-11/12 text-lg">explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation </h2>
          <h2 className="pt-10 italic">creator name</h2>
        </div>
        <div className="w-90 max-[800px]:h-96 rounded-md border-2 p-2 px-8 pb-2 overflow-scroll">
        <Com />
        <Com />
        <Com />
        <Com />
        </div>
      </div>
      <div className="text-right mr-10 max-[800px]:hidden">
      <div className="inline-block border-2 p-12 pt-1 pb-4 rounded-lg mr-24 mb-4">
        <div className="py-3 text-xl font-medium text-left">post comments</div>
        <div className="flex flex-col">
          <label className="text-lg text-left" htmlFor="name">name</label>
          <input type="text" id="name" name="creatorName" className="w-48 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-left" htmlFor="comment">coments</label>
          <textarea className="rounded border border-gray-300 bg-gray-100 bg-opacity-50 p-2 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" name="comment" id="comment" cols={30} rows={5}></textarea>
        </div>
        <button className="bg-teal-300 hover:bg-teal-800 p-2 text-lg border-teal-800 border-2 rounded-lg mt-4">make Coments</button>
      </div>
      </div>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}