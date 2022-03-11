import React from 'react';

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
      <a href='/'>Contact</a>
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