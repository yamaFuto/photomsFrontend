import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート
import { FC } from "react";

SwiperCore.use([Pagination, Navigation])

// カルーセルにする画像のソースをリストにします
const images = [
  '/test_image.jpg',
  '/test_image2.jpg',
  '/test_image.jpg',
  '/test_image2.jpg',
]

type props = {
  urls: string[]
}

const Carousel : FC<props> = ({urls}) => {
  return (
    <Swiper
      slidesPerView={1} //一度に表示するスライドの数
      pagination={{
        clickable: true,
      }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
      navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
    >
      {urls.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={src}
              layout="responsive"
              width="700"
              height="700"
              alt="image"
              className="rounded-lg"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
