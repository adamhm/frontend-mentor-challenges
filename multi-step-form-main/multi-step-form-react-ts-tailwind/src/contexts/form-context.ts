import React from "react";
import { FormAction, FormState } from "@typedefs";
import initState from "@state/init-state";

interface FormContextType {
    state: FormState;
    dispatch?: React.Dispatch<FormAction>;
}

export default React.createContext<FormContextType>({ state: initState });
