import { steps } from "@shared/steps";
import { StepElement } from "@components";
import { useContext } from "react";
import { StepContext } from "@contexts";

function StepPanel() {
    const { activeStep } = useContext(StepContext);

    return (
        <div className="flex flex-row justify-center gap-x-[15px] py-[32px] md:h-full md:flex-col md:justify-normal md:gap-x-0 md:gap-y-[28px] md:px-[30px] md:py-[40px]">
            {steps.map((step) => (
                <StepElement
                    key={step.id}
                    step={step.id}
                    text={step.text}
                    active={
                        step.id === activeStep ||
                        (step.id === steps.length && activeStep > step.id)
                    }
                />
            ))}
        </div>
    );
}

export default StepPanel;
