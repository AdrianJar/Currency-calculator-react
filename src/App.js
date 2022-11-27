import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Container from "./Container";
import { currencies } from "./Currency"
import { useState } from "react";

function App() {
  const [result, getResult] = useState();

  const calculatedResult = (exchangeAmount, currency) => {
    const exchangeRate = currencies.find(({ short }) => short === currency).rate;
    const short = currencies.find(({ short }) => short === currency).short;

    getResult((exchangeAmount / exchangeRate).toFixed(2) + short);
  };

  return (
    <Container>
      <Header
        title="Kalklator walut"
      />
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
