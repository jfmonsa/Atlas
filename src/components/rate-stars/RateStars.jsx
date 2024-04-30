import "./RateStars.css";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react";

const RateStars = ({}) => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="stars_container">
        {Array(5)
          .fill()
          .map((_, index) =>
            number >= index + 1 ? (
              <AiFillStar
                className="stars"
                style={{color: "orange"}}
                onClick={() => setNumber(index + 1)}
              />
            ) : (
              <AiOutlineStar
                className="stars"
                style={{color: "black"}}
                onClick={() => setNumber(index + 1)}
              />
            ),
          )}
      </div>
    </>
  );
};

export default RateStars;
