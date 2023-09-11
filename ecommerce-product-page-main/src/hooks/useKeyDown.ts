import { useEffect } from "react";

function useKeyDown(key: string, handler: Function) {
    useEffect(() => {
        const eventListener = (e: KeyboardEvent) => {
            if (e.key === key) {
                handler(e);
            }
        };

        document.addEventListener("keydown", eventListener);

        return () => {
            document.removeEventListener("keydown", eventListener);
        };
    });
}

export default useKeyDown;
