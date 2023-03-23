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
})();
