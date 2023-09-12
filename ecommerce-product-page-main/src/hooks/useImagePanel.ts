import { useState } from "react";

function useImagePanel(numOfImages: number, initial: number) {
    const [activeImage, setActiveImage] = useState(initial);

    const setNextImage = () => {
        setActiveImage((activeImage) =>
            activeImage + 1 > numOfImages ? 1 : activeImage + 1
        );
    };

    const setPreviousImage = () => {
        setActiveImage((activeImage) =>
            activeImage - 1 < 1 ? numOfImages : activeImage - 1
        );
    };

    return { activeImage, setActiveImage, setNextImage, setPreviousImage };
}

export default useImagePanel;
