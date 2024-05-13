import React from 'react'

const TitleContext = React.createContext<string>('');

const Title = () => {
  return (
    <TitleContext.Consumer>
      {title => <h1>{title}</h1>}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
      <TitleContext.Consumer>
        {title => <p>{title}</p>}
      </TitleContext.Consumer>
    </div>
  )
}

const Page = () => {
  const title = "React Book";

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page;