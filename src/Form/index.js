import { useState } from "react";
import { currencies } from "../currency/index.js"
import Footer from "../Footer";
import { StyledForm, Fieldset, LabelContent, Input, Select, FormResult, FormResultText, FormResultAmount, ButtonsContainer, Button } from "./styled";

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
        <StyledForm
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <Fieldset>
                <div>
                    <label>
                        <LabelContent>
                            Kwota w zł:*
                        </LabelContent>
                        <Input
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
                        <LabelContent>
                            Wybierz walutę:*
                        </LabelContent>
                        <Select
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
                        </Select>
                    </label>
                </div>
                <FormResult>
                    <FormResultText><p>Wynik przewalutowania:</p></FormResultText>
                    <FormResultAmount>{result}</FormResultAmount>
                </FormResult>
                <ButtonsContainer>
                    <Button>Przelicz</Button>
                    <Button type="reset">Reset</Button>
                </ButtonsContainer>
                <Footer
                    title="Pola oznaczone * są wymagane"
                />
            </Fieldset>
        </StyledForm>
    )
};

export default Form;