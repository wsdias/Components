import { useState } from "react"

import '../style/input.css'

interface IInputText{
  id?: string
  label?: string
  name?: string
  placeholder?: string
  value?: number | string
}

const InputText: React.FC<IInputText> = (props) => {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <div
        style={{
          background: '#ddd',
          borderRadius: '4px',
          padding: '8px',
          width: 'max-content'
        }}
      >
        {
          props.label ?
            <label
              className='label'
              htmlFor={props.id}
            >
              {props.label}
            </label>
          :
            <></>
        }
        <input
          className='input'
          name={props.name}
          onChange={(e) => setValue(e.target.value)}
          id={props.id}
          type="text"
          value={props.value ?? value}
        />
      </div>
    </>
  )
}

export default InputText
