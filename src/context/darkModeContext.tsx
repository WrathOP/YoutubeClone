import { createContext,  useReducer } from "react";
import darkModeReducer from "../reducers/darkModeReducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const INITIAL_STATE : any= {
  darkMode: true,
  theme: {
    dark: {
      background: "bg-gray-800",
      textColor: "text-white",
      border: "border-gray-700",
      card: "bg-gray-700",
      input: "bg-gray-700 text-white",
      button: "bg-gray-700 text-white",
      link: "text-blue-400",
    },
    light: {
      background: "bg-white",
      textColor: "text-black",
      border: "border-gray-200",
      card: "bg-white",
      input: "bg-gray-100",
      button: "bg-blue-500 text-white",
      link: "text-blue-500",
    },
  },
};

export const DarkModeContext = createContext(INITIAL_STATE);

//@ts-expect-error: Children can be of any type
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, theme: state.theme, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
