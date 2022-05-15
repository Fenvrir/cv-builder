import React from "react";
import "./Header.scss";
import { PrinterIcon } from "@heroicons/react/solid";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  div {
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 0.5rem;
  }
`;

const Header = ({ onClick }) => {
  return (
    <header className="Header">
      <Container>
        <div className="Header_wrapper">
          <span>CV Builder</span>
        </div>
        <button
          type="button"
          onClick={() => onClick()}
        >
          <PrinterIcon
            aria-hidden="true"
          />
          Print
        </button>
      </Container>
    </header>
  );
};

export default Header;
