import React from "react";
import { Container } from "./style";
import ThemeContext from "styled-components";

interface HeaderProps {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    return (
        <Container>
            <h1>Styled Components</h1>
            <div className="toggle-switch">
                <label className="switch">
                    <input
                        type="checkbox"
                        id="toggleSwitch"
                        onChange={toggleTheme}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </Container>
    );
};

export default Header;
