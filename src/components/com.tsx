import { FC } from "react";
import axios from "@/libs/axios";
import { useState } from "react";

type props = {
  name: string,
  comment: string,
  goods: number,
  id: number,
}

const URL = "/api/incrementGoods";

const Com : FC<props> = ({ name, comment, goods, id}) => {
  const [ good, setGood ] = useState<number>(goods);
  const [ threshhold, setThreshhold] = useState<number>(0);

  const incre = () => {
    if (!threshhold) {
      setGood((prev) => ++prev);
      setThreshhold((prev) => ++prev);
      try {
        axios.post(URL, {id: id}).then((response) => {
          console.log(response);
        })
      } catch(e) {
        console.log(e)
      }
    }
  }
  return (
    <>
      <div className="border-b-2 pb-2">
        <p className="text-xl">{name}</p>
        <h1>{comment}</h1>
        <div className="mr-6 mt-3 flex justify-end">
          <button onClick={incre}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`${threshhold ? "text-red-700" : "text-red-300" } h-6 w-6 text-red-300 hover:text-red-700`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
          <h2 className="ml-2">{good}</h2>
        </div>
      </div>
    </>
  )
}

export default Com;