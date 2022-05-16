import React, { useState } from "react";
import Desc from "../Layout/Desc/Desc";
import Title from "../Layout/Title/Title";
import Avatar from "../UI/Avatar/Avatar";
import Range from "../UI/Range/Range";
import "./Main.scss";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`;

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? "center" : "start")};
  margin: 2rem 0;
`;

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
  text-align: center;
`;

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
  box-sizing: border-box;
`;
const Block = styled.div`
  margin-bottom: 30px;
`;

const ContactsText = styled.p`
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  .icon {
    margin: 0 5px -5px 0;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Main = ({ className, inputRef }) => {
  const [skillCounter, setSkillCounter] = useState(1);
  const [workCounter, setWorkCounter] = useState(1);
  const [expCounter, setExpCounter] = useState(1);

  const onClickSkillHandler = () => {
    setSkillCounter((counter) => counter + 1);
  };

  const onClickExpHandler = () => {
    setExpCounter((counter) => counter + 1);
  };

  const onClickWorkHandler = () => {
    setWorkCounter((counter) => counter + 1);
  };
  return (
    <div className={className}>
      <Wrapper>
        <div ref={inputRef}>
          <Row itemsCenter>
            <Sidebar>
              <Avatar isSquare={false} />
            </Sidebar>
            <Content>
              <Title size={"1"}>Jakub Kessler</Title>
              <Desc isPrimary>Marketing Manager</Desc>
            </Content>
          </Row>
          <Row>
            <Sidebar>
              <Title isActive isUppercase size={"2"}>
                Contact
              </Title>
              <Desc isActive={false} isPrimary>
                Address
              </Desc>
              <Desc isSecondary>Street 1/1, 61-111 Poznań, Poland</Desc>
              <ContactsText>
                <MailIcon className="icon" />
                Email
              </ContactsText>
              <Desc isSecondary>jakub@email.com</Desc>
              <ContactsText>
                <PhoneIcon className="icon" />
                Phone
              </ContactsText>
              <Desc isSecondary>+48 666 999 666</Desc>
            </Sidebar>
            <Content>
              <Title
                onClick={onClickWorkHandler}
                isShowButton
                isUppercase
                size={"2"}
              >
                Experience
              </Title>
              <hr />
              {new Array(workCounter).fill(1).map((item, index) => (
                <Block key={index}>
                  <Desc isPrimary>Marketing Communication Manager</Desc>
                  <Desc isSecondary>
                    Volkswagen Group Poland, 2018 - ongoing
                  </Desc>
                </Block>
              ))}
              <Title
                onClick={onClickExpHandler}
                isShowButton
                isUppercase
                size={"2"}
              >
                Education
              </Title>
              <hr />
              {new Array(expCounter).fill(1).map((item, index) => (
                <Block key={index}>
                  <Desc isPrimary>Poznan University of Economics</Desc>
                  <Desc isSecondary>
                    Masters Degree in International Business, 2005 - 2009
                  </Desc>
                </Block>
              ))}
              <Title
                onClick={onClickSkillHandler}
                isShowButton
                isUppercase
                size={"2"}
              >
                Skills
              </Title>
              <hr />
              {new Array(skillCounter).fill(1).map((item, index) => (
                <Range key={index} />
              ))}
            </Content>
          </Row>
        </div>
      </Wrapper>
    </div>
  );
};

export default Main;
