import { useState } from "react";

const messages = [
  "Learn React *️⃣✳️",
  "Apply for Jobs 🏢",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Test 1</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Test 2</p>
        <p>Test 3</p>
      </StepMessage>

      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  // useState method
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); // is false components will hide

  function handlePrevious() {
    //if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      //setStep((step + 1));
      //setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
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
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
