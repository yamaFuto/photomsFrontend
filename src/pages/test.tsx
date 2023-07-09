import Carousel from "@/components/swiper";
import ModalContent from "@/components/modalContent";
import { useState } from "react";
import axios from "axios";

export default function Test() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>

      <button onClick={() => setIsOpen(true)}>開く</button>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}