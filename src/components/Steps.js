import StepMessage from "./StepsMessage";
import Button from "./Button";
import { messages } from "../data/messages";
import useSteps from "../hooks/useSteps";
// steps component jsx fnx
export default function Steps() {
  // use custom hooks
  // setStep not use
  const { step, isOpen, setIsOpen, handlePrevious, handleNext } = useSteps();
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}
          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor="blue"
              textColor="white"
              onClick={() => alert(`Learn how ${messages[step - 1]}`)}
            >
              Learn How
            </Button>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#ffffff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous{" "}
            </Button>

            <Button bgColor="#7950f2" textColor="#ffffff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
