import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import "./FaqComponent.css";

const FaqComponent = (props) => {
  const [showText, setShowText] = useState(false);
  const displayHandler = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <div key={props.Data.Id} className="faqblock">
        <div className="faqhead" onClick={displayHandler}>
          <p>{props.Data.question}</p>
          <MdExpandMore />
        </div>
        {showText ? (
          <div className="faqans">
            <p>{props.Data.answer}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FaqComponent;
