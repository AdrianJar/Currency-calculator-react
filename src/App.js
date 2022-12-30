import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Container from "./Container";
import Time from "./Clock";

function App() {

  return (
    <Container>
      <Header
        title="Kalklator walut"
      />
      <Time />
      <Form />
      <Footer
        title="Kalukulator walut by Adrian Jaroszuk"
      />
    </Container>
  );
}

export default App;
