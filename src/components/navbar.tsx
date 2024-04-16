import { Link } from "react-router-dom";
import youtubeLogo from "../assets/Youtube-Logo.png";
import createicon from "../assets/Create.png";
import appsIcon from "../assets/Apps.png";
import profileicon from "../assets/Profile.png";
import notificationicon from "../assets/Notifications.png";
import SearchBar from "./searchbox";
import { Flex } from "antd";

const NavBar = () => {
  return (
    <Flex
      //   justify={"space-around"}
      className="flex flex-row align-items-center justify-between items-center px-4 py-2 bg-#0f0f10 sticky top-0"
    >
      <Link
        to="/"
        // style={{ textDecoration: "none", color: "white" }}
      >
        <img src={youtubeLogo}></img>
      </Link>
      <SearchBar className="width-100 border-red" />

      <Flex className="flex flex-row align-center">
        <img src={createicon} className=""></img>
        <img src={appsIcon} className=""></img>
        <img src={notificationicon} className=""></img>
        <img src={profileicon} className=""></img>
      </Flex>
    </Flex>
  );
};

export default NavBar;
