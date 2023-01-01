import { useState } from "react";
import { useRatesData } from "./useRatesData";
import Footer from "../Footer";
import Info from "../Info";
import LoadAnimation from "./LoadAnimation";
import { Result } from "./Result";
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
    Button,
    Loading,
    Failure,
} from "./styled";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState();
    const ratesData = useRatesData();
    const { rates, date, status } = ratesData;

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
        console.log(result)
    };

    const calculateResult = (amount, currency) => {
        const exchangeRate = rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * exchangeRate,
            currency,
        });
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            {status === "loading"
                ? (
                    <Loading>
                        <LoadAnimation></LoadAnimation>
                        Poczekaj chwilę dane są ładowane z Europejskiego Banku Centralnego
                    </Loading>
                )
                :
                (status === "error" ? (
                    <Failure>
                        Ups... Coś poszło nie tak...
                        <br />
                        Sprawdź swoje połączenie z internetem.
                        <br />
                        Jeśli Twoje połączenie z internetem jest stabilne, spróbuj ponownie później.
                        <br />
                        Przepraszam za problemy.
                    </Failure>
                )
                    :
                    (<Fieldset>
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
                                    {Object.keys(rates).map(currency => (
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
                            <FormResultText>
                                <p>Wynik przewalutowania:</p>
                            </FormResultText>
                            <FormResultAmount>
                                <Result
                                    result={result}
                                />
                            </FormResultAmount>
                        </FormResult>
                        <ButtonsContainer>
                            <Button>Przelicz</Button>
                        </ButtonsContainer>
                        <Info
                            date={date}
                        />
                        <Footer
                            title="Pola oznaczone * są wymagane"
                        />
                    </Fieldset>
                    ))
            }
        </StyledForm>
    )
};

export default Form;