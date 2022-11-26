

const Form = () => (
    <form class="form js-form">
        <fieldset class="form__fieldset">
            <legend class="form__legend">Kalkulator walutowy</legend>
            <p>
                <label>
                    <span class="form__labelText"> Kwota w zł: </span>
                    <input
                        placeholder="Wpisz kwotę w zł"
                        class="form__field js-amountInPLN"
                        type="number"
                        min="0"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span class="form__labelText"> Wybierz walutę: </span>
                    <select class="form__field js-currencyName">
                        <option value="USD">Dolar Amerykański</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Funt Brytyjski</option>
                    </select>
                </label>
            </p>
            <p class="form__calculationResult">
                Wynik przeliczenia: <strong class="js-result"></strong>
            </p>
            <p>
                <button class="form__button">Przelicz</button>
            </p>
        </fieldset>
    </form>
);

export default Form;