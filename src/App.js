import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Container from "./Container";
import { currencies } from "./assets/currency"
import { useState } from "react";
import Time from "./Clock";


function App() {


  const [result, getResult] = useState();

  const calculatedResult = (exchangeAmount, currency) => {
    const { rate: exchangeRate, short } = currencies.find(({ short }) => short === currency);

    getResult((exchangeAmount / exchangeRate).toFixed(2) + short);
  };

  return (
    <Container>
      <Header
        title="Kalklator walut"
      />
      <Time />
      <Form
        calculatedResult={calculatedResult}
        getResult={getResult}
        result={result}
      />
      <Footer
        title="Kalukulator walut by Adrian Jaroszuk"
      />
    </Container>
  );
}

export default App;
