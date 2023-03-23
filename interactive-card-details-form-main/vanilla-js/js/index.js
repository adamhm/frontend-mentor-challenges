(function () {
    const errorMessages = {
        cantBeBlank: "Can't be blank",
        wrongFormat: "Wrong format",
        wrongFormatNumbersOnly: "Wrong format, numbers only",
    };

    const cardForm = document.getElementById("card_form");
    const cardNumberField = document.getElementById("card_number");
    const cardNameField = document.getElementById("card_name");
    const cardExpirationField = document.getElementById("card_expiration");
    const cvcField = document.getElementById("card_cvc");

    const formElements = Array.from(cardForm.elements);
    formElements.forEach((elem) => elem.addEventListener("input", update));

    document.getElementById("confirm").addEventListener("click", function () {
        removeErrors();
        setErrors();
    });

    function update() {
        cardForm.cardnumber.value = formatCardNumber(cardForm.cardnumber.value);
        cardNumberField.innerText = cardForm.cardnumber.value;
        cardNameField.innerText = cardForm.name.value;
        cardExpirationField.innerText = `${cardForm.month.value}/${cardForm.year.value}`;
        cvcField.innerText = cardForm.cvc.value;
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
        setCardNumberError();
        setExpDateError();
        setCvcError();
    }

    function setCardNumberError() {
        const condition = /\d{16}/;
        const cardNumber = cardForm.cardnumber.value.replaceAll(" ", "");
        let errorMessage = getErrorMessage(cardNumber, 16, condition);

        if (errorMessage !== null) {
            setErrorProperties(
                cardForm.cardnumber,
                cardForm.cardnumber.nextElementSibling,
                errorMessage
            );
        }
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
    }

    function setCvcError() {
        const condition = /\d{3}/;
        const cvc = cardForm.cvc.value.replaceAll(" ", "");
        let errorMessage = getErrorMessage(cvc, 3, condition);

        if (errorMessage !== null) {
            setErrorProperties(
                cardForm.cvc,
                cardForm.cvc.nextElementSibling,
                errorMessage
            );
        }
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
