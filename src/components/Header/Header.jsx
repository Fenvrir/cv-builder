import "./Header.scss";
import { PrinterIcon, DownloadIcon } from "@heroicons/react/solid";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  span {
    font-weight: 700;
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
  .Header_buttons {
    display: flex;
    gap: 10px;
    box-sizing: border-box;
    margin: 0 10px;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: bold;
      &:hover {
        background-color: #f3f3f3;
        border-radius: 20px;
        transform: scale(1.1, 1.1);
      }
    }
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 5px -5px 0;
  }
`;

const Header = ({ onClickPrint, onClickDownload }) => {
  return (
    <header className="Header">
      <Container>
        <div className="Header_wrapper">
          <span>CV Builder</span>
        </div>
        <div></div>
        <div className="Header_buttons">
          <div>
            <button type="button" onClick={onClickDownload}>
              <DownloadIcon className="icon" aria-hidden="true" />
              Download
            </button>
          </div>
          <div>
            <button type="button" onClick={() => onClickPrint()}>
              <PrinterIcon className="icon" aria-hidden="true" />
              Print
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
