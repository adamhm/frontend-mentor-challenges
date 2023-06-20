import { steps } from "@shared/steps";
import { StepElement } from "@components";
import { useContext } from "react";
import { StepContext } from "@contexts";

function StepPanel() {
    const { activeStep } = useContext(StepContext);

    return (
        <div className="flex h-full flex-col gap-y-[28px] px-[30px] py-[40px]">
            {steps.map((step) => (
                <StepElement
                    key={step.id}
                    step={step.id}
                    text={step.text}
                    active={step.id === activeStep}
                />
            ))}
        </div>
    );
}

export default StepPanel;
