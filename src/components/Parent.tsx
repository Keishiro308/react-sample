import React, { memo, useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log("Fizzが再描画されました", isFizz)
  return <p>{isFizz ? "Fizz" : ""}</p>
}

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log("Buzzが再描画されました", isBuzz)
  return (
    <p onClick={onClick}>{isBuzz ? "Buzz" : ""}</p>
  )
})

const Parent = () => {
  const [count, setCount] = useState(0)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0
  console.log("Parentが再描画されました", count)

  const onBuzzClick = () => {
    console.log("Buzzがクリックされました")
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      <p>{count}</p>
      <Fizz isFizz={isFizz} />
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
    </div>
  )
}

export default Parent