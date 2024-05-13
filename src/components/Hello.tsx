const Hello = () => {
  const onClick = () => {
    alert('Hello, world!');
  }


  const text = 'Hello, React!';

  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
}

export default Hello;