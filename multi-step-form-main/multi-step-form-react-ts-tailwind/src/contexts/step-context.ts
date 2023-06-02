import React from "react";

interface StepContextType {
    activeStep: number;
    setActiveStep: ((step: number) => void) | undefined;
}

const StepContext = React.createContext<StepContextType>({
    activeStep: 0,
    setActiveStep: undefined,
});

export default StepContext;
