const prompt = require('sync-input');

const currencies = new Map();
currencies.set("USD", 1.0);
currencies.set("JPY", 113.5);
currencies.set("EUR", 0.89);
currencies.set("RUB", 74.36);
currencies.set("GBP", 0.75);

function isValidCurrency(currency) {
    if (currencies.get(currency) === undefined) {
        console.log("Unknown currency");
        return false;
    }
    return true;
}

function isValidAmount(amount) {
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return false;
    }
    if (Number(amount) < 1) {
        console.log("The amount cannot be less than 1");
        return false;
    }
    return true;
}

console.log("Welcome to Currency Converter!");

for (let [key, value] of currencies.entries()) {
    console.log(`1 USD equals ${value} ${key}`);
}

let choice = "";

do {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    choice = prompt();
    switch (choice) {
        case "1":
            console.log(`What do you want to convert?`);
            let fromCurrency, toCurrency, amount;
            do {
                fromCurrency = prompt("From: ").toUpperCase();
            } while(!isValidCurrency(fromCurrency));
            do {
                toCurrency = prompt("To: ").toUpperCase();
            } while(!isValidCurrency(toCurrency));
            do {
                amount = Number(prompt("Amount: "));
            } while(!isValidAmount(amount));
            let toValue = currencies.get(toCurrency);
            let fromValue = currencies.get(fromCurrency);
            let result = toValue * amount / fromValue;
            let fromString = `${amount} ${fromCurrency}`;
            let toString = `${result.toFixed(4)} ${toCurrency}`;
            console.log(`Result: ${fromString} equals ${toString}`);
            break;
        case "2":
            console.log("Have a nice day!");
            break;
        default:
            console.log("Unknown input");
            break;
    }
} while(choice !== "2");