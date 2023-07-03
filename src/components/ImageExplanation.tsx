import { FC } from "react";
import Image from "next/image"

type photo = {
  created_at: string,
  updated_at: string,
  goods: number,
  id: number,
  sum: number,
  url: string,
  detail_id: number
}

type detail = {
  created_at: string
  explanation: string
  genre: string
  id: number
  name: string
  photoname: string
  updated_at: string
}

type props = {
  detail: detail
  photo: photo
}

const ImageExplanation : FC<props> = ({detail, photo}) => {
// console.log(photo, detail)
  return (
    <>
    <Image alt="image" width="700" height="700" className="rounded-lg" src={photo.url} priority/>
    <div className="max-[800px]:mt-4 pr-6">
    <div className="min-[800px]:ml-10  mb-8">
      <h1 className="mb-2 text-3xl max-[640px]:mt-4 w-96">{detail.photoname}</h1>
      <h2 className="max-[640px]:w-11/12 max-[800px]:pl-5 text-lg">{detail.explanation}</h2>
      <h2 className="pt-10 italic max-[800px]:pl-5">{detail.name}</h2>
    </div>
    </div>
    </>
  )
}

export default ImageExplanation;