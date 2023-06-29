import { ContentPanel, Sidebar } from "@components";
import { useMemo, useReducer, useState } from "react";
import formReducer from "@state/form-reducer";
import initState from "@state/init-state";
import { FormContext, StepContext } from "@contexts";

function App() {
    const [state, dispatch] = useReducer(formReducer, initState);
    const formContext = useMemo(() => ({ state, dispatch }), [state]);

    const [activeStep, setActiveStep] = useState(1);
    const stepContext = useMemo(
        () => ({
            activeStep,
            setActiveStep,
        }),
        [activeStep]
    );

    return (
        <StepContext.Provider value={stepContext}>
            <FormContext.Provider value={formContext}>
                <article className="flex h-full w-[940px] flex-col bg-magnolia md:h-[600px] md:flex-row md:gap-4 md:rounded-2xl md:bg-white md:p-4 md:shadow-xl">
                    <Sidebar />
                    <ContentPanel />
                </article>
            </FormContext.Provider>
        </StepContext.Provider>
    );
}

export default App;
