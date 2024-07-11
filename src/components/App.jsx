import { Container } from './Container.styled';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Form from './Form/Form';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          <Contacts />
          <Form />
        </Container>
      </main>
    </>
  );
};
