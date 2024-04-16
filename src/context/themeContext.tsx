import { createContext } from "react";

// Define initial state
const INITIAL_STATE = {
  // Text colors
  colorTheme: {
    textColorLight: "text-black",
    textColorDark: "text-white",
    textDarkGrey: "text-gray-700",
    textGrey: "text-gray-900",
    // Font colors
    font1: "text-white",
    font2: "text-gray-500",
    lightFont1: "text-black",
    lightFont2: "text-gray-600",

    // Color palette
    accentColor: "bg-[fb8c72]",
    primaryOrange: "bg-orange-500",
    lightGrey: "bg-gray-300",
    lightOrange: "bg-yellow-300",

    // Background colors
    backgroundGrey: "bg-gray-800",
    backgroundBlack: "bg-black",

    background1: "bg-gray-900",
    background2: "bg-[#4A4E5A]",
    background3: "bg-gray-700",
    background4: "bg-gray-600",
    background5: "bg-gray-500",

    lightBackground1: "bg-[#f7f9fb]",
    lightBackground2: "bg-[#ffffff]",
    lightBackground3: "bg-gray-200",
    lightBackground4: "bg-gray-300",
    lightBackground5: "bg-gray-400",
  },
};

// Create the context
export const ThemeContext = createContext(INITIAL_STATE);

// Context provider component
//@ts-expect-error: Children can be of any type
export const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={INITIAL_STATE}>
      {children}
    </ThemeContext.Provider>
  );
};
