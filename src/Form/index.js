import "./style.css"
import { useState } from "react";
import { currencies } from "../currency/index.js"
import Footer from "../Footer";

const Form = ({ result, calculatedResult, getResult }) => {

    const [exchangeAmount, setExchangeAmount] = useState("");

    const [currency, setCurrency] = useState("USD");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculatedResult(exchangeAmount, currency);
    };

    const onFormReset = () => {
        setExchangeAmount("")
        getResult("")
    };

    return (
        <form className="form"
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <fieldset className="form__fieldset">
                <div>
                    <label>
                        <span className="form__labelText">
                            Kwota w zł:*
                        </span>
                        <input
                            className="form__input"
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
                        <span className="form__labelText">
                            Wybierz walutę:*
                        </span>
                        <select
                            className="form__select"
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
                <div className="form__result">
                    <div className="form_resultText"><p>Wynik przewalutowania:</p></div>
                    <div className="form__resultAmount">{result}</div>
                </div>
                <div className="form__buttons">
                    <button className="form__button">Przelicz</button>
                    <button className="form__button" type="reset">Reset</button>
                </div>
                <Footer
                    title="Pola oznaczone * są wymagane"
                />
            </fieldset>

        </form>
    )
};

export default Form;