import { useState } from "react";
import { useRatesData } from "./useRatesData";
import Footer from "../Footer";
import {
    StyledForm,
    Fieldset,
    LabelContent,
    Input,
    Select,
    FormResult,
    FormResultText,
    FormResultAmount,
    ButtonsContainer,
    Button
} from "./styled";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [result, setResult] = useState("");
    const ratesData = useRatesData();

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const calculateResult = (amount, currency) => {
        const exchangeRate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: +amount * exchangeRate,
            currency,
        });
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Fieldset>
                <div>
                    <label>
                        <LabelContent>
                            Kwota w zł:*
                        </LabelContent>
                        <Input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
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
                            {Object.keys(ratesData.rates).map(currency => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            ))}
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