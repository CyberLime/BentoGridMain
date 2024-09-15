const Element = ({
  element,
  content,
}: {
  //? type of a jsx element (if you want to use a prop as an element/tag)
  element: keyof JSX.IntrinsicElements;
  //? a type of the content that is set to dangerouslySetInnerHTML prop
  content?: string | TrustedHTML;
}) => {
  const HtmlEl = element;

  if (element === "img" && typeof content === "string") {
    return <img src={content} alt={content}></img>;
  }

  // check if content is NOT undefined to prevent a runtime error
  if (content) {
    //? dangerouslySetInnerHTML is for making the tags in content work
    return <HtmlEl dangerouslySetInnerHTML={{ __html: content }}></HtmlEl>;
  }

  return null;
};

export default Element;
