import { useState, ChangeEvent } from "react";

type Function = (initialValue: number | string) => [
  {
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  },
  () => void,
]


const useInput: Function = initialValue => {
  const [value, setValue] = useState<string | number>(initialValue);

  return [
    { value, onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)},
    () => setValue(initialValue)
  ]
}

export default useInput;