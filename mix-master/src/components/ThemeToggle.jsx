import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const initialMode = () => {
  const mode = localStorage.getItem("dark-theme") === "true";
  return mode;
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(initialMode());

  const toggleDarkTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("darkTheme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <Wrapper>
      <button className="toggle-btn" onClick={toggleDarkTheme}>
        {isDark ? (
          <BsFillMoonFill className="toggle-icon" style={{ color: "#fff" }} />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .toggle-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }

  .toggle-icon {
    font-size: 1.25rem;
  }
`;

export default ThemeToggle;
