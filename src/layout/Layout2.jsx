import Header from "./Header";
import backgGround from "../assets/home/image-21.png";
import { useLocation } from "react-router-dom";
import Header2 from "./Header2";
import Footer from "./Footer";
export default function Layout2({ children }) {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <>
        <div>
          
          <div className="flex-grow h-full">{children}</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col bg-blackText/5 text-primaryBlue ">
                <Header2 />

          <div className="flex-grow h-[calc(100vh-320px)]">{children}</div>
          <Footer />
        </div>
      </>
    );
  }
}
