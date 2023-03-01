(function () {
    const buttons = document.querySelectorAll(".card__accordion__item button");

    buttons.forEach((button) =>
        button.addEventListener("click", buttonClickHandler)
    );

    function buttonClickHandler(e) {
        const isExpanded = this.getAttribute("aria-expanded") === "true";

        if (isExpanded) {
            setStatus(this, false);
        } else {
            const expandedElement = document.querySelector(
                "button[aria-expanded='true']"
            );

            if (expandedElement) {
                setStatus(expandedElement, false);
            }

            setStatus(this, true);
        }
    }

    function setStatus(element, expanded) {
        const section =
            element.parentNode.parentNode.getElementsByTagName("section")[0];
        section.dataset.open = expanded;
        element.setAttribute("aria-expanded", expanded);
    }
})();
