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
 button{
   border: none;
   background-color: #fff;
   cursor: pointer;
   font-size: 1.3rem;
   font-weight: bold;
   &:hover{
    background-color: #f3f3f3;
    border-radius: 20px;
    padding: 0 4px 0 4px;
   }
 }
  .icon{
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 5px -5px 0;

  }
`;

const Header = ({ onClick }) => {
  return (
    <header className="Header">
      <Container>
        <div className="Header_wrapper">
          <span>CV Builder</span>
        </div>
        <div>
        </div>
        <button type="button" onClick={() => onClick()}>
          <PrinterIcon className="icon" aria-hidden="true" />
          Print
        </button>
      </Container>
    </header>
  );
};

export default Header;
