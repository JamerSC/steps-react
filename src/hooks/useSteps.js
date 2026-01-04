import { useState } from "react";

export default function useSteps() {
  // useState method
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); // is false components will hide

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return {
    step,
    setStep,
    isOpen,
    setIsOpen,
    handlePrevious,
    handleNext,
  };
}
