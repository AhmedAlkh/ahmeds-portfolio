import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;