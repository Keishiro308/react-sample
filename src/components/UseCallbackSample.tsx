import React, { useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log("DecrementButtonが再描画されました")

  return (
    <button onClick={onClick}>カウントダウン</button>
  )
}

const IncremantButton = React.memo<ButtonProps>((props) => {
  const { onClick } = props

  console.log("IncremantButtonが再描画されました")

  return (
    <button onClick={onClick}>カウントアップ</button>
  )
})

const DoubleButton = React.memo<ButtonProps>((props) => {
  const { onClick } = props

  console.log("DoubleButtonが再描画されました")

  return (
    <button onClick={onClick}>2倍</button>
  )
})

export const Parent = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  console.log("Parentが再描画されました", count)

  return (
    <div>
      <p>{count}</p>
      <DecrementButton onClick={decrement} />
      <IncremantButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}