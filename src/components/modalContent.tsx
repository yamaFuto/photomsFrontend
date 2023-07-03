import { useEffect, useState, ChangeEvent, FormEvent, MouseEvent, useRef } from "react";
import Modal from "@/components/modal"
import { FC } from "react"
import useInput from "@/hooks/input";
import axios from "@/libs/axios";
import { useRouter } from 'next/router';

type props = {
  isOpen: boolean,
  setIsOpen: (p: boolean) => void,
}

const URL = "http://localhost:8000/api/detailSave";

const ModalContent: FC<props> = ({setIsOpen, isOpen}) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ image, setImage ] = useState<File[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);
  const router = useRouter();

  const [nameProps, resetName] = useInput("");
  const [photonameProps, resetPhotoname] = useInput("");
  const [genreProps, resetGenre] = useInput("");
  const [explanationProps, resetExplanation] = useInput("");

  // console.log(image, nameProps, photonameProps, genreProps, explanationProps);

  let as: File[] = [];
  const getImage = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return;
    for (let i = 0; i < e.target.files.length; i++) {
      if (!e.target.files[i]) {
        break;
      }
      as[i] = e.target.files[i];
    }
    setImage([...as]);
  }

  // console.log(image.length);

  const HandleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (image.length > 4) {
      console.log('excess');
      return 0;
    }
    if (!image[0] || !nameProps.value || !photonameProps.value || !genreProps.value || !explanationProps.value ) {
      console.log("fail");
      return ;
    }
    const data = new FormData();
    if(!image) return 0;
    image.forEach((value, i)=> {
      const key = 'image' + i;
      data.append(key, value);
    });
    data.append("name", nameProps.value);
    data.append("photoname", photonameProps.value);
    data.append("explanation", explanationProps.value);
    data.append("genre", genreProps.value);
    console.log(Object.fromEntries(data.entries()));
    setLoading((prev) => !prev);
    axios.post(URL, data, {
      headers: {
        'content-type' : 'multipart/form-data',
      }
    }
    ).then((response) => {
      // setIsOpen(false);
      router.reload();
      // console.log(response);
    }).catch((e) => {
      console.log(e);
    })
  }

  // const isFirstRender = useRef(false);

  // // このeffectは初回レンダー時のみ呼ばれるeffect
  // useEffect(() => {
  //   isFirstRender.current = true
  // }, []);

  // // 『count』 が更新された場合『と』初回レンダー時に動くeffect
  // useEffect(() => {
  //   if(isFirstRender.current) { // 初回レンダー判定
  //     isFirstRender.current = false // もう初回レンダーじゃないよ代入
  //   } else {
  //     axios.post(URL, data, {
  //       headers: {
  //         'content-type' : 'multipart/form-data',
  //       }
  //     }).then((response) => {
  //       console.log(response);
  //     }).catch((e) => {
  //       console.log(e);
  //     })
  //   }
  // }, [data]);

if (loading) return (
  <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <p>now uploading</p>
  </Modal>
)

  return (
    <>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">Post your photographs</h1>
          <p className="">Up to 4 photos</p>
          <form method="post" encType="multipart/form-data">
          <div className="flex justify-center">
            <div className="mr-20 flex flex-col">
              <label htmlFor="creatorName" className="mt-2">Name</label>
              <input {...nameProps} type="text" id="creatorName" name="creatorName" className="w-48 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" required/>
              <label htmlFor="PhotoName" className="mt-2">Photo Name</label>
              <input {...photonameProps} type="text" id="PhotoName" name="PhotoName" className="w-48 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" required/>
              <label htmlFor="genre" className="mt-1">genre</label>
              <select {...genreProps} name="genre" id="genre" className="rounded-lg border-2 p-1 text-lg" required>
                <option value="">select genre</option>
                <option value="sports">sports</option>
                <option value="cooking">cooking</option>
                <option value="politics">politics</option>
                <option value="economy">economics</option>
                <option value="outdoor">outdoor</option>
                <option value="trip">trip</option>
                <option value="animal">animals</option>
                <option value="game">game</option>
                <option value="comic">manga</option>
                <option value="anime">anime</option>
                <option value="others">the others</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-lg">explanation</label>
              <textarea {...explanationProps} className="rounded border border-gray-300 bg-gray-100 bg-opacity-50 p-2 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200" name="message" id="" cols={30} rows={6} required></textarea>
            </div>
          </div>
          <div>
            <div className="text-center">
              <div className="my-3 text-lg font-medium">photos</div>
              <div className="pl-12">
                <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" multiple required/>
                {/* <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" />
                <input className="mb-3" onChange={getImage} name="image" type="file" accept="image/png, image/jpeg, image/jpg" /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="border-2 p-2 rounded-lg hover:bg-zinc-400" onClick={() => setIsOpen(false)}>cancel</button>
            <button onClick={HandleSubmit} className="border-2 p-2 rounded-lg bg-teal-300 hover:bg-teal-800">send</button>
          </div>
        </form>
          
          </Modal>
    </>
  )
}

export default  ModalContent;