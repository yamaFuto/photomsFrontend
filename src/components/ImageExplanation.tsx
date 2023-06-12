import { FC } from "react";
import Image from "next/image"

type props = {
}

const ImageExplanation : FC<props> = () => {
  return (
    <>
    <Image alt="image" width="700" height="700" className="rounded-lg" src="/images/300x300mono.png" />
    <div className="min-[700px]:ml-10 mb-8">
      <h1 className="mb-2 text-3xl max-[640px]:mt-4">title</h1>
      <h2 className="max-[640px]:w-11/12 text-lg">explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation </h2>
      <h2 className="pt-10 italic">creator name</h2>
    </div>
    </>
  )
}

export default ImageExplanation;