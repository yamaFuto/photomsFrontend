import { FC } from "react";

type props = {
}

const PhotoComment : FC<props> = () => {
  return (
    <div className="flex flex-col mx-2 mb-2">
      <input className="border-b-2 p-1 w-4/12 focus:outline-0" type="text" placeholder="name" />
      <div className="flex">
        <input className="border-b-2 p-1 w-full focus:outline-0" type="text" placeholder="comment" />
        <button className="bg-teal-300 hover:bg-sky-900 px-1 ml-2 rounded-lg">send</button>
  </div>
</div>
  )
}

export default PhotoComment;