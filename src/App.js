import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Header
        title="Kalklator walut"
      />
      <Form />
      <Footer
        title="Kalukulator walut by Adrian Jaroszuk"
      />
    </Container>
  );
}

export default App;
