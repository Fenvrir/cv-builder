import React from "react";
import Desc from "../Layout/Desc/Desc";
import Title from "../Layout/Title/Title";
import Avatar from "../UI/Avatar/Avatar";
import "./Main.scss";

const Main = () => {
  return (
      <div className="flex-auto">
        <section className=" max-w-[1200px] my-8 mx-auto py-12 px-8 bg-white border border-[#ececec] rounded-xl shadow-[5px_7px_10px_4px_#ececec]">
          <div className="flex flex-wrap items-center my-8 mx-0">
            <div className="">
              <Avatar />
            </div>
            <div className="">
              <Title>Main</Title>
              <Desc className={"text-cyan-800"}>Desc</Desc>
            </div>
          </div>
          <div className="flex flex-wrap  my-8 mx-0">
            <div contentEditable className=" grow ml-4">sidebar</div>
            <div contentEditable className=" grow-[3] mr-4">content</div>
          </div>
        </section>
      </div>
  );
};

export default Main;
