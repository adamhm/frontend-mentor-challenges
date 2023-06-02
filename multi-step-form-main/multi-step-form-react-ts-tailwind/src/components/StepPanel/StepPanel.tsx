import { steps } from "@shared/steps";
import { StepElement } from "@components";
import { useMemo, useState } from "react";
import StepContext from "@contexts/step-context";

function StepPanel() {
    const [activeStep, setActiveStep] = useState(1);
    const context = useMemo(
        () => ({ activeStep, setActiveStep }),
        [activeStep]
    );

    return (
        <StepContext.Provider value={context}>
            <div className="flex flex-col gap-y-[28px] px-[30px] py-[40px]">
                {steps.map((step) => (
                    <StepElement
                        step={step.id}
                        text={step.text}
                        active={step.id === activeStep}
                    />
                ))}
            </div>
        </StepContext.Provider>
    );
}

export default StepPanel;
