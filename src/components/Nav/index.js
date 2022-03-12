import React from 'react';

function Nav(props) {

  return (
    
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
  );
}

export default Nav;