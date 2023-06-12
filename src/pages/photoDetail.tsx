import Header from "@/components/header"
import Com from "@/components/com"
import Image from "next/image"
import { useState } from "react";
import ModalContent from "@/components/modalContent"
import PhotoComment from "@/components/photoComment"
import ImageExplanation from "@/components/ImageExplanation";

export default function PhotoDetail() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Header action={setIsOpen} />
      <div className="flex max-[800px]:flex-col m-20 mb-2 h-96 max-[800px]:h-full">
        <ImageExplanation></ImageExplanation>
        <div>
          <PhotoComment />
          <div className="ml-4 h-96 rounded-md border-2 p-2 px-8 pb-2 overflow-scroll">
            <Com />
            <Com />
            <Com />
            <Com />
          </div>
        </div>
      </div>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}