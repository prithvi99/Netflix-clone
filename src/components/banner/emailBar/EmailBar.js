import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./emailBar.css";

const EmailBar = () => {
  return (
    <>
      <h3>
        {" "}
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="netflix__form">
        <form>
          <label>
            <input
              type="text"
              className="netflix__formInput"
              placeholder="Email Address"
            />
          </label>
        </form>
        <button className="netflix__formButton">
          Get Started <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </>
  );
};

export default EmailBar;
