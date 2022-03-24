import { createContext, FC, useState } from "react";

interface ICityProviderState {
  cityName: string;
  setCityName: (cityName: string) => void;
}

const initialState: ICityProviderState = {
  cityName: "",
  setCityName: (cityName: string) => {},
};

export const CityContext = createContext(initialState);

export const CityProvider: FC = ({ children }) => {
  const [cityName, setCityName] = useState("");

  return (
    <CityContext.Provider value={{ cityName, setCityName }}>
      {children}
    </CityContext.Provider>
  );
};
