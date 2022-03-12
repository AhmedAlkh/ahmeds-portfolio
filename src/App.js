import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Nav></Nav>
      <hr></hr>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;