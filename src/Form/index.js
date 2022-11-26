import { useState } from "react";
import { currencies } from "../Currency/index"

const Form = ({ result, calculatedResult, getResult }) => {

    const [exchangeAmount, setExchangeAmount] = useState("");

    const [currency, setCurrency] = useState("USD");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculatedResult(exchangeAmount, currency);
    };

    const onFormReset = () =>{
        setExchangeAmount("")
        getResult("")
    };

    return (
        <form
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <fieldset>
                <legend>Kalkulator walutowy</legend>
                <div>
                    <label>
                        <span>
                            Kwota w zł:
                        </span>
                        <input
                            value={exchangeAmount}
                            onChange={({ target }) => setExchangeAmount(target.value)}
                            placeholder="Wpisz kwotę w zł"
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Wybierz walutę:
                        <select
                            name="currency"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map(currency => (
                                <option
                                    key={currency.id}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))};
                        </select>
                    </label>
                </div>
                <div>
                    Wynik przeliczenia:{result}
                </div>
                <div>
                    <button>Przelicz</button>
                    <button
                    type="reset"
                    >
                        Reset
                        </button>
                </div>
            </fieldset>
        </form>
    )
    };

    export default Form;