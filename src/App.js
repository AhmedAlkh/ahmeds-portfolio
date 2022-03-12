import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('about');
  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About/>;
      case 'contact':
        return <Contact/>
      default:
        return <About/>
    }
  }

  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection}></Header>
      <hr></hr>
      <main>
        <div>{renderSection(currentSection)}</div>
        {/* <About></About> */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;