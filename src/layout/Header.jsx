import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons"; // Assuming you're using Ant Design Icons

export default function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className=" w-full flex items-center pt-8 ">
      <div className=" flex justify-between items-center w-full px-6 lg:px-10 ">
        <div className=" w-full flex justify-start items-center">
          <Link to={"/"} className="text-3xl font-bold text-[#fc2174] hover:text-white transition-all duration-150 backdrop-blur-sm">
            Dr.S.Neelakandan
          </Link>
        </div>
        <div className="hidden md:flex w-full justify-end gap-7 items-center text-white ">
          <Link to={"/academics"} className=" text-base whitespace-nowrap font-semibold">
            Academics & Experience
          </Link>
          <Link to={"/people"} className=" text-base whitespace-nowrap font-semibold">
            People
          </Link>
          <Link to={"/projects"} className=" text-base whitespace-nowrap font-semibold">
            Projects
          </Link>
          <Link to={"/publication"} className=" text-base whitespace-nowrap font-semibold">
            Publication
          </Link>
          <Link to={"/opportunities"} className=" text-base whitespace-nowrap font-semibold">
            Opportunities
          </Link>

          <Link to={"/honors"} className=" text-base whitespace-nowrap font-semibold">
            Honors
          </Link>
          <Link to={"/research"} className=" text-base whitespace-nowrap font-semibold">
            Research Topics
          </Link>
        </div>
        <div className="flex md:hidden">
          <Button
            type="primary"
            className=" bg-gray-400 flex h justify-center items-center"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >

        <div className=" flex flex-col text-lg  gap-1">
          <Link
            onClick={onClose} to={"/"} className="  text-lg   ">
            Dr.S.Neelakandan
          </Link>

          <Link
            onClick={onClose} to={"/academics"} className=" display-block my-4">
            Academics & Experience
          </Link>
          <Link
            onClick={onClose} to={"/people"} className=" display-block mb-4">
            People
          </Link>
          <Link
            onClick={onClose} to={"/projects"} className=" display-block mb-4">
            Projects
          </Link>
          <Link
            onClick={onClose} to={"/publication"} className=" display-block mb-4">
            Publication
          </Link>
          <Link
            onClick={onClose} to={"/opportunities"} className=" display-block mb-4">
            opportunities
          </Link>

          <Link
            onClick={onClose} to={"/honors"} className=" display-block mb-4">
            Honors
          </Link>
          <Link
            onClick={onClose} to={"/research"} className=" display-block mb-4">
            Research Activities
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
