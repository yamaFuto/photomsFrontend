import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート

SwiperCore.use([Pagination, Navigation])

// カルーセルにする画像のソースをリストにします
const images = [
  '/test_image.jpg',
  '/test_image2.jpg',
  '/test_image.jpg',
  '/test_image2.jpg',
]

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1} //一度に表示するスライドの数
      pagination={{
        clickable: true,
      }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
      navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={src}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
