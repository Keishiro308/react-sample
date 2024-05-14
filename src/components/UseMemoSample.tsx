import React, { useState, useMemo } from 'react'

export const UseMemoSample = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => [...prevItems, text])
    setText('')
  }

  // 再描画のたびに文字数を計算する
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)
  // itemsが変更されたときだけ文字数を計算する
  const numberOfCharacters2 = useMemo(() => items.reduce((sub, item) => sub + item.length, 0), [items])

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>追加</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>文字数: {numberOfCharacters1}</p>
      <p>文字数: {numberOfCharacters2}</p>
    </div>
  )
}