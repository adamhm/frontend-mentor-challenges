function formatCardNumber(cardNumber: string): string {
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

export default formatCardNumber;
