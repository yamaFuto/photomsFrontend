import { useEffect, useState, ChangeEvent } from "react";
import Modal from "@/components/modal"
import { FC } from "react"

type props = {
  isOpen: boolean,
  setIsOpen: (p: boolean) => void,
}

const ModalContent: FC<props> = ({setIsOpen, isOpen}) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ image, setImage ] = useState<File>();
  const getImage = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return;
    const img = e.target.files[0];
    setImage(img);
  }
  return (
    <>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">Post your photographs</h1>
          <p className="">Up to 4 photos</p>
          <div className="flex justify-center">
            <div className="mr-20 flex flex-col">
              <label htmlFor="creatorName" className="mt-2">Name</label>
              <input type="text" id="creatorName" name="creatorName" className="w-48 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
              <label htmlFor="PhotoName" className="mt-2">Photo Name</label>
              <input type="text" id="PhotoName" name="PhotoName" className="w-48 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" />
              <label htmlFor="genre" className="mt-1">genre</label>
              <select name="genre" id="genre" className="rounded-lg border-2 p-1 text-lg">
                <option value="">select genre</option>
                <option value="sports">sports</option>
                <option value="cooking">cooking</option>
                <option value="politics">politics</option>
                <option value="economy">economics</option>
                <option value="outdoor">outdoor</option>
                <option value="trip">trip</option>
                <option value="animal">animals</option>
                <option value="game">game</option>
                <option value="comic">manga</option>
                <option value="anime">anime</option>
                <option value="others">the others</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-lg">explanation</label>
              <textarea className="rounded border border-gray-300 bg-gray-100 bg-opacity-50 p-2 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" name="message" id="" cols={30} rows={6}></textarea>
            </div>
          </div>
          <div>
            <div className="text-center">
              <div className="my-3 text-lg font-medium">photos</div>
              <div className="pl-12">
                <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" required/>
                <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="border-2 p-2 rounded-lg hover:bg-zinc-400" onClick={() => setIsOpen(false)}>cancel</button>
            <button className="border-2 p-2 rounded-lg bg-teal-300 hover:bg-teal-800">send</button>
          </div>
          </Modal>
    </>
  )
}

export default  ModalContent;