import { FC } from "react";
import axios from "@/libs/axios";
import useInput from "@/hooks/input";
import {useRouter} from "next/router";

type props = {
  detail_id: number
}

const URL = "/api/makeComment";

const PhotoComment : FC<props> = ({ detail_id}) => {
  const router = useRouter();
  const [ commentName, resetCommentName] = useInput("");
  const [ comment, resetComment] = useInput("");
  // console.log(detail_id);
  const ans = {
    detail_id: detail_id,
    name: commentName.value,
    comment: comment.value
  }
  const onClick = () => {
    if(!comment.value || !comment.value) {
      console.log("fail")
      return 0;
    }
    try {
      axios.post(URL, ans).then((response) => {
        // console.log(response.data);
        router.reload();
      })
    } catch(e) {
      console.log(e);
    }
  }
  return (
    <div className="flex flex-col mx-2 mb-2 max-[800px]:w-80 max-[800px]:block max-[1060px]:hidden max-[1300px]:w-56">
      <input {...commentName} className="border-b-2 p-1 w-4/12 focus:outline-0" type="text" placeholder="name" required/>
      <div className="flex">
        <input {...comment} className="border-b-2 p-1 w-full focus:outline-0" type="text" placeholder="comment" required/>
        <button onClick={onClick} className="bg-teal-300 hover:bg-sky-900 px-1 ml-2 rounded-lg">send</button>
      </div>
    </div>
  )
}

export default PhotoComment;