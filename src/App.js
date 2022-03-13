import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('about');
  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About/>;
      case 'portfolio':
        return <Portfolio/>;
      case 'contact':
        return <Contact/>
      case 'resume':
        return <Resume/>
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
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;