import Element from "./Element";

const BentoGridElement = ({
  className,
  data,
}: {
  className: string;
  data: {
    h1: string;
    img: string;
    //? type that will be used in dangerouslySetInnerHTML prop
    p?: string | TrustedHTML;
  };
}) => {
  return (
    <li className={`e e${className}`}>
      {/*//? iterating through object's keys to use them like html elements */}
      {Object.keys(data).map((element, index) => {
        // ensure element is a valid HTML element to prevent a runtime error
        if (
          element === "h1" || 
          element === "p" || 
          element === "img"
        ) {
          return (
            <Element 
              key={index} 
              element={element} 
              content={data[element]} 
            />
          );
        }

        return null;
      })}
    </li>
  );
};

export default BentoGridElement;
