import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { currentSection, setCurrentSection } = props;

    return (
        <header>
            <h2>Ahmed Alkhatib</h2>
            <Nav currentSection={currentSection} setCurrentSection={setCurrentSection}></Nav>
        </header>
    );
}

export default Header;