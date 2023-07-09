import Image from 'next/image'
import {useRouter} from "next/router"
import { useState, useEffect, ChangeEvent } from "react";
import ModalContent from "@/components/modalContent";
import Header from "@/components/header";
import { faker } from '@faker-js/faker';
import { FixedSizeList } from "react-window";
import axios from "@/libs/axios";
import { useDispatch } from "react-redux";
import store from "@/store/index";
import { changeGenre, resetGenre } from "../store/modules/genre";
import { useSelector } from "react-redux";

const URL = "/api/detail";
const URL_MULTIPLE = "/api/multipleDetail";

type photo = {
  created_at: string,
  updated_at: string,
  id: number,
  goods:number,
  sum: number,
  url: string,
  detail_id: number
}

type genre = {
  genre: string,
  search: string,
  word: string
}

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [datas, setData] = useState<photo[][]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);

  type AppDispatch = typeof store.dispatch;
  const dispatch = useDispatch<AppDispatch>();
  const genre = useSelector((state: genre) => state.genre);

  const updatedGenre = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeGenre(e.target.value));
  }

  const move = (photo: photo) => {
    router.push({
      pathname: "/show/MultiplePhotoDetail",
      query: { q : photo.detail_id}
    })
  }

  useEffect(() => {
    if (genre)  {
      router.push("/genre/several")
      console.log(genre);
    }
    try {
      setLoading(true);
      axios.get(URL_MULTIPLE).then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
    } catch (e) {
      console.log(e);
    }
  }, [genre, router])
  console.log(datas);

  return (
    <>
    <Header action={setIsOpen} />

      <div className="container max-[600px]:ml-20 max-[600px]:w-96 ml-40 mt-10 flex pb-0 border-b-2 w-4/12">
        <button onClick = {() => router.push("/")} className="group mr-8 text-2xl pl-2">
          image
          <div className="group-hover:bg-teal-300 h-1 rounded-md duration-100"></div>
        </button>
        <button onClick={() => router.push("/wallpaper")} className="group text-2xl">
          wallpaper
          <div className="group-hover:bg-teal-300 h-1 rounded-md duration-100"></div>
        </button>
        <button className="group max-[600px]:ml-2 ml-8 text-2xl">
          several images
          <div className="bg-teal-800 h-1 rounded-md"></div>
        </button>
      </div>

      <select value={genre} onChange={updatedGenre} className="mt-8 ml-44 text-xl border-2 p-1 rounded-lg">
        <option value="">select genre</option>
        <option value="sports" >sports</option>
        <option value="cooking" >cooking</option>
        <option value="politics" >politics</option>
        <option value="economy" >economics</option>
        <option value="outdoor" >outdoor</option>
        <option value="trip" >trip</option>
        <option value="animal" >animals</option>
        <option value="game" >game</option>
        <option value="comic" >manga</option>
        <option value="anime" >anime</option>
        <option value="others" >the others</option>
      </select>
      {loading ?
      <div className="text-4xl text-center mt-40">
        now Loading
      </div>
      :
        datas.length ?
        <ol className="w-6/12 grid grid-cols-3 max-[600px]:grid-cols-1 max-[1000px]:grid-cols-2 gap-y-4 gap-x-4 mt-12 mb-4 mx-auto pt-2 border-t-2">
          {datas.map((photo: photo[]) => (
            <button onClick={move.bind(null, photo[0])} key={photo[0].id}>
              <li ><Image className="hover:scale-105 duration-100 rounded-md" width="300" height="300" alt="image" src={photo[0].url} /></li>
            </button>
          ))}
        </ol>
        :
        <div className="text-4xl text-center mt-40">
          there is no photos
        </div>
      }
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}