import React, { useState } from "react";
import Desc from "../Layout/Desc/Desc";
import Title from "../Layout/Title/Title";
import Avatar from "../UI/Avatar/Avatar";
import Range from "../UI/Range/Range";
import "./Main.scss";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";


const Main = ({inputRef}) => {
  const [counter, setCounter] = useState(1);

  const onClickHandler  = () => {
    setCounter(counter => counter + 1);
  }
  return (
    <div ref={inputRef} className="flex-auto">
      <section className=" max-w-[1200px] my-8 mx-auto py-12 px-8 bg-white border border-[#ececec] rounded-xl shadow-[5px_7px_10px_4px_#ececec]">
        <div className="flex flex-wrap items-center my-8 mx-0">
          <div className="w-80 px-4">
            <Avatar />
          </div>
          <div className="">
            <Title className={"text-3xl"}>Mikhail Nikulaichev</Title>
            <Desc className={"text-cyan-800"}>
              JS & React Frontend developer
            </Desc>
          </div>
        </div>
        <div className="flex flex-wrap  my-8 mx-0 ">
          <div className=" w-80 mx-4 box-border">
            <Title className={"text-2xl uppercase"}>About me</Title>
            <Desc className={"text-cyan-800 "}>Frontend developer</Desc>
            <Desc className={"text-gray-500"}>Russia, Tomsk | 70</Desc>
            <Desc className={"text-cyan-800 mt-8"}>
              dragonofhokage@gmail.com
            </Desc>
           
            <Desc className={"text-cyan-800"}>
            +7(999)-620-33-92</Desc>
          </div>
          <div className="  mr-4 w-[740px] max-w-[740px]">
            <Title className={"text-xl uppercase"}>Education:</Title>
            <Desc className={"text-cyan-800"}>Tomsk State University</Desc>
            <Title className={"text-xl uppercase mt-8"}>Work experience:</Title>
            <Desc className={"text-cyan-800"}>None</Desc>
            <Title isButton onClick={onClickHandler} className={"text-xl uppercase mt-8"}>Skills</Title>
            <div className="flex flex-wrap items-center my-8 mx-0 gap-8">
              {new Array(counter).fill(1).map((_, i) => <Range key={i} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
