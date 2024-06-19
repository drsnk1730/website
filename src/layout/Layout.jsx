import Header from "./Header";
import backgGround from "../assets/home/image-21.png";
import { useLocation } from "react-router-dom";
export default function Layout({ children }) {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <>
        <div
          className="flex flex-col "
          style={{
            backgroundImage: `url(${backgGround})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: "622px",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-grow h-full">{children}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col bg-blackText/5 text-primaryBlue ">
          <div className="flex-grow h-full">{children}</div>
        </div>
      </>
    );
  }
}
