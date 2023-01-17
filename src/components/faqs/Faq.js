import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EmailBar from "../banner/emailBar/EmailBar";
import "./faq.css";
import faq from "./faq.json";

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowanswer = (i) => {
    if (showAnswer === i) {
      return setShowAnswer(null);
    }
    setShowAnswer(i);
  };

  return (
    <div className="faq">
      <div className="faqContainer">
        <h1 className="faqHeading">Frequently Asked Questions</h1>
        {faq.map((item, i) => {
          return (
            <div
              className="faqQyestions"
              key={item.id}
              onClick={() => {
                handleShowanswer(i);
              }}
            >
              <div className="faqQuestion">
                <div className="question">{item.question}</div>
                <FontAwesomeIcon icon={showAnswer === i ? faMinus : faPlus} />
              </div>
              {showAnswer === i ? (
                <div className={"faqAnswer"}>
                  <div className="answer">{item.answer}</div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <EmailBar />
    </div>
  );
};

export default Faq;
