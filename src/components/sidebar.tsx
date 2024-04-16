import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import logo from "../assets/Logo.png";
import profile from "../assets/Profile.png";
import { FC, createContext, useContext, useState } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { cn } from "../constants/functions";
import { ThemeContext } from "../context/themeContext";
import Button from "./UI-Components/button";

const SidebarContext = createContext({ expanded: true });

interface SidebarProps {
  children: React.ReactNode;
}
export const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const { darkMode } = useContext(DarkModeContext);
  const { colorTheme } = useContext(ThemeContext);

  return (
    <>
      <aside className="h-screen">
        <nav
          className={cn(
            "h-full flex flex-col  border-r shadow-sm"
          )}
        >
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              //TODO: Change the logo based on theme mode
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0 "
              }`}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={cn(
                `${
                  darkMode
                    ? `${colorTheme.background2}`
                    : `${colorTheme.lightBackground2}`
                }`,
                `hover:${
                  darkMode
                    ? `${colorTheme.background5}`
                    : `${colorTheme.lightBackground2}`
                }`,
                "p-1.5 rounded-lg"
              )}
            >
              {expanded ? (
                <ChevronFirst color={darkMode ? "white" : "black"} />
              ) : (
                <ChevronLast color={darkMode ? "white" : "black"} />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className=" rounded-xl flex p-3 ">
            <img src={profile} className="rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } ${
                darkMode
                  ? `${colorTheme.textColorDark}`
                  : `${colorTheme.textColorLight}`
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">GotReplacedByAI</h4>
                <span
                  className={cn(
                    "text-xs"
                  )}
                >
                  AiMF@gmail.com
                </span>
              </div>
              <Button>
                <MoreVertical />
              </Button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: () => void;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  alert,
  onClick,
}) => {
  const { expanded } = useContext(SidebarContext);
  const { darkMode } = useContext(DarkModeContext);
  const { colorTheme } = useContext(ThemeContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group  ${
        active
          ? `${
              darkMode ? colorTheme.background2 : colorTheme.lightBackground2
            } shadow-lg`
          : `${colorTheme.textGrey}`
      } `}
      onClick={onClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          darkMode
            ? `${colorTheme.textColorDark}  `
            : `${colorTheme.textColorLight}}`
        } 
        ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded ${
            colorTheme.accentColor
          } ${expanded ? "" : "top-2"}`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 shadow-md ${
            darkMode ? colorTheme.primaryOrange : colorTheme.lightBackground2
          } ${
            colorTheme.textColorDark
          } text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
};
