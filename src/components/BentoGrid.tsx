import BentoGridElement from "./BentoGridElement";

// an array of objects with keys, that will get the content value and will be used as HTML elements
import { BENTOGRIDELEMENTDATA } from "../constants/bentoGridData";

const BentoGrid = () => {
  return (
    <ul>
      {BENTOGRIDELEMENTDATA.map((data, index) => (
        <BentoGridElement 
          key={index} 
          data={data} 
          className={String(index)} 
        />
      ))}
    </ul>
  );
};

export default BentoGrid;
