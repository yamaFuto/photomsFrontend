import Carousel from "@/components/swiper";
import ModalContent from "@/components/modalContent";
import { useState } from "react";

export default function Test() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Carousel />

      <button onClick={() => setIsOpen(true)}>開く</button>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}