import React from 'react';
import ContactForm from '../Contact';

function Nav() {

  return (
    <header>
  <h2>
    <a href="/">
    Ahmed Alkhatib
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li>
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <a href='/'>Portfolio</a>
      </li>
      <li>
      <a href={ContactForm}>Contact</a>
      </li>
      <li>
      <a href="/">Resume</a>
      </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;