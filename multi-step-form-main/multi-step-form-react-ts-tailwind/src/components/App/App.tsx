import { ContentPanel, Sidebar } from "@components";
import { useMemo, useReducer } from "react";
import formReducer from "@state/form-reducer";
import initState from "@state/init-state";
import FormContext from "@contexts/form-context";

function App() {
    const [state, dispatch] = useReducer(formReducer, initState);
    const formContext = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <FormContext.Provider value={formContext}>
            <article className="flex h-[600px] w-[940px] gap-4 rounded-2xl bg-white p-4 shadow-xl">
                <Sidebar />
                <ContentPanel />
            </article>
        </FormContext.Provider>
    );
}

export default App;
