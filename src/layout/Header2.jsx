import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons"; // Assuming you're using Ant Design Icons
export default function Header2() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    const [url, setUrl] = useState("");
    const location = useLocation();
    useEffect(() => {
      setUrl(location.pathname);
    }
    , [location]);

  return (
    <>
     <div className=" w-full flex items-center     ">
  <div className=" flex justify-between items-center w-full  pl-6 lg:pl-10 ">
    <div className=" w-full flex justify-start items-center ">
      <Link
        to={"/"}
        className={`text-2xl text-primaryRed font-semibold ${
          window.location.pathname === "/" ? "text-primaryRed" : ""
        }`}
      >
        Dr.S.Neelakandan
      </Link>
    </div>
    <div className=" w-full flex justify-end gap-10   ">
      <div className=" hidden  md:flex gap-10  py-8 items-center    bg-blackText/5 px-10 text-primaryBlue">
        <Link
          to={"/academics"}
          className={`text-base whitespace-nowrap font-semibold ${
            window.location.pathname === "/academics" ? "text-primaryRed" : ""
          }`}
        >
          Academics & Experience
        </Link>
        <Link
          to={"/people"}
          className={`text-base whitespace-nowrap font-semibold ${
            window.location.pathname === "/people" ? "text-primaryRed" : ""
          }`}
        >
          People
        </Link>
        <Link
          to={"/projects"}
          className={`text-base whitespace-nowrap font-semibold ${
            window.location.pathname === "/projects" ? "text-primaryRed" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to={"/publication"}
          className={`text-base whitespace-nowrap font-semibold ${
            window.location.pathname === "/publication" ? "text-primaryRed" : ""
          }`}
        >
          Publication
        </Link>
        <Link
          to={"/opportunities"}
          className={`text-base whitespace-nowrap font-semibold ${
            window.location.pathname === "/opportunities" ? "text-primaryRed" : ""
          }`}
        >
          Opportunities
        </Link>
        <Link
          to={"/honors"}
          className={`text-base whitespace-nowrap font-semibold ${
            window.location.pathname === "/honors" ? "text-primaryRed" : ""
          }`}
        >
          Honors
        </Link>
        <Link
          to={"/research"}
          className={`text-base whitespace-nowrap font-semibold ${
            window.location.pathname === "/research" ? "text-primaryRed" : ""
          }`}
        >
          Research Activities
        </Link>
      </div>
      <div className="flex md:hidden pr-6  py-8 ">
        <Button
          className=" bg-gray-400 flex h justify-center items-center"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
      </div>
    </div>
  </div>
</div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="flex flex-col text-lg gap-1">
          <Link
            onClick={onClose}
          
        
          to={"/"} className="  text-lg   font- ">
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
            Opportunities
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
    </>
  );
}
