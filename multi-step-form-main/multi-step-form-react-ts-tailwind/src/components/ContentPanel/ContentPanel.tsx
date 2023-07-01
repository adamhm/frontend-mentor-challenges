import { useContext } from "react";
import { Step1, Step2, Step3, Step4, Step5 } from "@components";
import { StepContext } from "@contexts";

function ContentPanel() {
    const { activeStep } = useContext(StepContext);

    const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />];

    return (
        <section className="mt-[-74px] grow rounded-2xl md:mx-[74px] md:mt-0 md:rounded-none">
            {steps[activeStep - 1]}
        </section>
    );
}

export default ContentPanel;
