import { useState, ChangeEvent } from "react";

type Function = (initialValue: string) => [
  {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  },
  () => void,
]

const useInput: Function = initialValue => {
  const [value, setValue] = useState<string>(initialValue);

  return [
    { value, onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setValue(e.target.value)},
    () => setValue(initialValue)
  ]
}

export default useInput;