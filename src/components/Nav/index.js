import React from 'react';

function Nav(props) {
  const { currentSection, setCurrentSection } = props;

  return (
    
  <nav>
    <ul className="flex-row">
      <li className={currentSection === 'about' ? 'mx-2 navActive' : 'mx-2'}>
        <span onClick={() => setCurrentSection('about')}>About Me</span>
      </li>
      <li className={currentSection === 'portfolio' ? 'mx-2 navActive' : 'mx-2'}>
        <span onClick={() => setCurrentSection('portfolio')}>Portfolio</span>
      </li>
      <li className={currentSection === 'contact' ? 'mx-2 navActive' : 'mx-2'}>
        <span onClick={() => setCurrentSection('contact')}>Contact</span>
      </li>
      <li className={currentSection === 'resume' ? 'mx-2 navActive' : 'mx-2'}>
        <span onClick={() => setCurrentSection('resume')}>Resume</span>
      </li>
    </ul>
  </nav>
  );
}

export default Nav;