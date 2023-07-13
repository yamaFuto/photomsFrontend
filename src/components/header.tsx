import Link from "next/link";
import { FC, ChangeEvent, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/index";
import axios from "@/libs/axios";
import { changeSearch, resetSearch } from "@/store/modules/search";
import { changeWord, resetWord } from "@/store/modules/word";
import { changeGenre, resetGenre } from "@/store/modules/genre";

type props = {
  action: (p: boolean) => void
}

type glob = {
  genre: string,
  search: string,
  word: string
}

const Header : FC<props> = ({action}) => {
  const router = useRouter();
  const search = useSelector((state: glob) => state.search);
  const word = useSelector((state: glob) => state.word);
  const isFirstRender = useRef(false)

  type AppDispatch = typeof store.dispatch;
  const dispatch = useDispatch<AppDispatch>();

  const updatedSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeWord(e.target.value));
  }
  
  const searchClick = () => {
    if (word) {
      dispatch(changeSearch(word));
      dispatch(resetGenre());
      router.push("/search");
    } else {
      dispatch(changeSearch(""));
      router.push("/");
    }
  }

  const moveToBegin = () => {
    dispatch(resetGenre());
    dispatch(resetSearch());
    dispatch(resetWord());
    router.push("/");
  }

  useEffect(() => { // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true
  }, [])

  useEffect(() => {// 『count』 が更新された場合『と』初回レンダー時に動くeffect
    if(isFirstRender.current) { // 初回レンダー判定
      isFirstRender.current = false // もう初回レンダーじゃないよ代入
    } else {
      localStorage.setItem('search', search);
    }
  }, [search])

  // localStorage.setItem("as", "JSON.stringify");

  // console.log(word);

  return (
    <>
      <div className=" flex justify-center mt-3 border-b-2 pb-3">
          <button onClick={moveToBegin} className="italic text-3xl mr-48 max-[400px]:m-0">Logo</button>
          {/* <Image alt="logo" src="https://placehold.jp/70x50.png" className="mr-48 max-[400px]:m-0" /> */}
          <input value={word} onChange={updatedSearch} id="clearbutton2" type="search" placeholder="serach" className="bg-slate-100 rounded-lg px-2 py-0 w-96 relative focus:outline-none max-[800px]:hidden"></input>
          <button onClick={searchClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 px-1 hover:bg-slate-400 max-[800px]:hidden rounded-lg ml-1 p-1 pt-2 mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <button onClick={() => action(true)} className="bg-teal-400 hover:bg-teal-700 duration-200 p-2 py-1 rounded-lg font-semibold text-xl text-zinc-100 ml-40 max-[600px]:ml-20 mt-2">Post</button>
        </div>
    </>
  )
}

export default Header;