import Header from "@/components/header"
import Com from "@/components/com"
import Image from "next/image"
import { useState, useEffect, useRef } from "react";
import ModalContent from "@/components/modalContent"
import PhotoComment from "@/components/photoComment"
import ImageExplanation from "@/components/ImageExplanation";
import MultipleImageExplanation from "@/components/MultipleImageExplanation";
import axios from "@/libs/axios";
import { useDispatch } from "react-redux";
import { changeSearch, resetSearch } from "../../store/modules/search";
import { changeWord, resetWord } from "../../store/modules/word";
import store from "@/store/index";

const URL = "/api/getDetail";

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

type comment = {
  created_at: string
  name: string
  id: number
  goods: number
  detail_id: number
  comment: string
  updated_at: string
}

type Props = {
  query: {
    q:  number
  }
}
type asyncProps = {
  props: Props
}
type PhotoDetail = [
  detail[],
  photo[],
  comment[]
]

type glob = {
  genre: string,
  search: string,
  word: string
}

type getProps = (props: Props) => Promise<asyncProps>;

const PhotoDetail: React.FC<Props> = ({ query }) => {
  // console.log(query.q);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ loading, setLoading] = useState<boolean>(false);
  const [PhotoDetail, setPhotoDetail] = useState<PhotoDetail>([[],[],[]]);
  const [ urls, setUrls ] = useState<string[]>([]);
  const isFirstRender = useRef(false);

  type AppDispatch = typeof store.dispatch;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(localStorage.getItem('search'), "aaaa");
    if (localStorage.getItem('search')) {
      dispatch(changeSearch(localStorage.getItem('search')));
      dispatch(changeWord(localStorage.getItem('search')));
    }
  }, [dispatch]);



  useEffect(() => {
    try {
      axios.get(URL, {
        params: {
          detail_id: query.q
        }
      }).then((response) => {
        console.log(response.data);
        setLoading((prev) => !prev);
        setPhotoDetail(response.data);
      })
    } catch (e) {
      console.log(e)
    }
  }, [query.q])

  // console.log(PhotoDetail[0][0], PhotoDetail[1][0]);

  useEffect(() => { // このeffectは初回レンダー時のみ呼ばれるeffect
    isFirstRender.current = true
  }, [])

  useEffect(() => {// 『count』 が更新された場合『と』初回レンダー時に動くeffect
    if(isFirstRender.current) { // 初回レンダー判定
      isFirstRender.current = false // もう初回レンダーじゃないよ代入
    } else {
      const str: string[] = [];
      PhotoDetail[1].map((data) => {
        str.push(data.url);
      })
      setUrls([...str]);
    }
  }, [PhotoDetail])

  if (PhotoDetail[0].length == 0) {
    console.log(PhotoDetail);
    return (
      <p>Now Loading...</p>
    )
  }

  console.log(urls);

  return (
    <>
      <Header action={setIsOpen} />
      <div className="flex max-[800px]:flex-col max-[800px]:ml-12 m-20 mb-2 h-96 max-[800px]:h-full">
        <MultipleImageExplanation detail={PhotoDetail[0][0]} photo={urls}></MultipleImageExplanation>
        <div>
          <PhotoComment detail_id={PhotoDetail[0][0].id}/>
          <div className="ml-4 w-96 max-[800px]:w-80 max-[800px]:block max-[500px]:w-80 max-[1300px]:w-56 max-[1060px]:hidden h-96 rounded-md border-2 p-2 px-8 pb-2 overflow-scroll">
            {PhotoDetail[2].map((comment) => {
              return (
                <Com key={comment.id} name={comment.name} comment={comment.comment} goods={comment.goods} id={comment.id}></Com>
              )
            })}
          </div>
        </div>
      </div>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export const getServerSideProps: getProps = async ({ query }) =>  {
  return {
    props: { query }
  }
}

export default PhotoDetail;