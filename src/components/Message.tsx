const Text = (props: { content: string }) => {
  const { content } = props;
  return <p className="text">{content}</p>;
}

const Message = (props: {}) => {
  const content1: string = "This is a parent component.";
  const content2: string = "Message uses Text component.";

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}

export default Message;