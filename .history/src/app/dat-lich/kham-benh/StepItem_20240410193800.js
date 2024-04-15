import React from "react";

export default function StepItem({ step }) {
  if (step === 0) {
    return <div>Step 1</div>;
  }
  if (step === 1) {
    return <div>Step 2</div>;
  }
  if (step === 2) {
    return <div>Step 3</div>;
  }
  if (step === 3) {
    return <div>Step 4</div>;
  }
}
