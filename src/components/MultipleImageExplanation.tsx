import { FC } from "react";
import Image from "next/image"
import Carousel from "@/components/swiper";

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
  photo: string[]
}

const MultipleImageExplanation : FC<props> = ({detail, photo}) => {
console.log("multiple")
  return (
    <>
    <Carousel urls={photo}></Carousel>
    <div className="max-[800px]:mt-4 pr-6 max-[1300px]:w-56">
    <div className="min-[800px]:ml-10  mb-8">
      <h1 className="mb-2 text-3xl max-[640px]:mt-4 w-96">{detail.photoname}</h1>
      <h2 className="max-[640px]:w-11/12 max-[800px]:pl-5 text-lg">{detail.explanation}</h2>
      <h2 className="pt-10 italic max-[800px]:pl-5">{detail.name}</h2>
    </div>
    </div>
    </>
  )
}

export default MultipleImageExplanation;