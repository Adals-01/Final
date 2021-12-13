import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

export default function Checkout() {
  const step1Content = <h1>Hello</h1>;
  const step2Content = <h1>wtf</h1>;
  const step3Content = <h1>this works</h1>;


  
  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
      
    return true;
    
  }


  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="App">
      <StepProgressBar
        startingStep={0}
        wrapperClass="progress-wrapper-custom"
        secondaryBtnClass="prev"
        primaryBtnClass="next"
        buttonWrapperClass="btn-wrap"
        previousBtnName="Back"
        nextBtnName="Next"
        stepClass="step"
        steps={[
          { label: "",
            name: "Briefing",
            content: step1Content
          },
          {
            label: "",
            name: "Image-Acquisition",
            content: step2Content
          },
          {
            label: "",
            name: "Image Processing",
            content: step3Content,
            validator: step2Validator
          },
        /*   {
            label: "Finish",
            name: "Finish",
            content: step3Content
          } */
        ]}
      />
    </div>
  );
}
