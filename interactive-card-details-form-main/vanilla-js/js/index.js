(function () {
    const errorMessages = {
        cantBeBlank: "Can't be blank",
        wrongFormat: "Wrong format",
        wrongFormatNumbersOnly: "Wrong format, numbers only",
    };

    const cardForm = document.getElementById("card_form");
    const formElements = Array.from(cardForm.elements);
    formElements.forEach((elem) => elem.addEventListener("input", update));

    document.getElementById("confirm").addEventListener("click", function () {
        removeErrors();
        if (setErrors() === false) {
            cardForm.style.display = "none";
            document.getElementById("completed").style.display = "block";
        }
    });

    document
        .querySelector("#completed button")
        .addEventListener("click", () => location.reload());

    function update() {
        const targetField = document.getElementById(this.dataset.target);

        switch (this) {
            case cardForm.name:
                targetField.innerText = this.value;
                break;
            case cardForm.number:
                const start = this.selectionStart;
                this.value = formatCardNumber(this.value);
                this.setSelectionRange(start + 1, start + 1);
                targetField.innerText = this.value;
                break;
            case cardForm.month:
            case cardForm.year:
                targetField.innerText = `${cardForm.month.value}/${cardForm.year.value}`;
                break;
            default:
                targetField.innerText = this.value;
                break;
        }
    }

    function formatCardNumber(cardNumber) {
        cardNumber = cardNumber.replaceAll(" ", "");

        if (cardNumber.length === 0) return "";

        let formattedNumber = cardNumber[0];

        for (let i = 1; i < cardNumber.length; i++) {
            if (i % 4 === 0) {
                formattedNumber += " ";
            }

            formattedNumber += cardNumber[i];
        }

        return formattedNumber.toUpperCase();
    }

    function setErrors() {
        const errorSetters = [
            setNameError,
            setCardNumberError,
            setExpDateError,
            setCvcError,
        ];
        let hasError = false;

        errorSetters.forEach((setter) => {
            const message = setter();
            hasError ||= message;
        });

        return !!hasError;
    }

    function setNameError() {
        const minLength = 1;
        const condition = /.+/;
        const name = cardForm.name.value.trim();
        const errorMessage = getErrorMessage(name, minLength, condition);

        if (errorMessage) {
            setErrorProperties(
                cardForm.name,
                cardForm.name.nextElementSibling,
                errorMessage
            );
        }

        return errorMessage;
    }

    function setCardNumberError() {
        const length = 16;
        const condition = new RegExp(`\\d{${length}}`);
        const cardNumber = cardForm.number.value.replaceAll(" ", "");
        const errorMessage = getErrorMessage(cardNumber, length, condition);

        if (errorMessage) {
            setErrorProperties(
                cardForm.number,
                cardForm.number.nextElementSibling,
                errorMessage
            );
        }

        return errorMessage;
    }

    function setExpDateError() {
        const monthCondition = /(0[1-9])|(1[0-2])/;
        const yearCondition = /\d{2}/;
        const month = cardForm.month.value.trim();
        const year = cardForm.year.value.trim();

        let monthErrorMessage = getErrorMessage(month, 2, monthCondition);
        let yearErrorMessage = getErrorMessage(year, 2, yearCondition);

        if (monthErrorMessage) {
            let errorField =
                cardForm.month.parentElement.parentElement.querySelector(
                    ".error"
                );
            setErrorProperties(cardForm.month, errorField, monthErrorMessage);
        }

        if (yearErrorMessage) {
            let errorField =
                cardForm.year.parentElement.parentElement.querySelector(
                    ".error"
                );

            setErrorProperties(cardForm.year, errorField, yearErrorMessage);
        }

        if (
            (monthErrorMessage || yearErrorMessage) &&
            !isHasSelectorSupported()
        ) {
            errorField.style.display = "block";
        }

        return monthErrorMessage || yearErrorMessage;
    }

    function setCvcError() {
        const length = 3;
        const condition = new RegExp(`\\d{${length}}`);
        const cvc = cardForm.cvc.value.replaceAll(" ", "");
        const errorMessage = getErrorMessage(cvc, length, condition);

        if (errorMessage) {
            setErrorProperties(
                cardForm.cvc,
                cardForm.cvc.nextElementSibling,
                errorMessage
            );
        }

        return errorMessage;
    }

    function getErrorMessage(value, expectedLength, condition) {
        if (value === "") {
            return errorMessages.cantBeBlank;
        } else if (value.length < expectedLength) {
            return errorMessages.wrongFormat;
        } else if (!condition.test(value)) {
            return errorMessages.wrongFormatNumbersOnly;
        }

        return null;
    }

    function setErrorProperties(inputElement, errorField, message) {
        inputElement.setAttribute("aria-invalid", "true");
        errorField.innerText = message;
    }

    function removeErrors() {
        formElements.forEach((elem) => elem.removeAttribute("aria-invalid"));

        if (!isHasSelectorSupported()) {
            for (const spanElement of cardForm.querySelectorAll("span.error")) {
                spanElement.style.display = "none";
            }
        }
    }

    function isHasSelectorSupported() {
        return CSS.supports("selector(div:has(input))");
    }
})();
