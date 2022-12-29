import axios from "axios";

    axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP")
        .then(response => console.log(response.data))
        .catch(error => console.error("coś poszło nie tak...!!!", error));

export const currencies = [
    {
        id: 1,
        short: "USD",
        name: "Dolar Amerykański",
        rate: 4.5480,
    },
    {
        id: 2,
        short: "EUR",
        name: "EURO",
        rate: 4.6958,
    },
    {
        id: 3,
        short: "GBP",
        name: "Funt Brytyjski",
        rate: 5.4205,
    }
];



