import { createContext, FC, useState } from "react";
import { IPlace } from "../../@types/appTypes";

interface ICityProviderState {
  cityName: string;
  setCityName: (cityName: string) => void;
  city: IPlace | undefined;
  setCity: (city: IPlace | undefined) => void;
}

const initialState: ICityProviderState = {
  cityName: "",
  setCityName: (cityName: string) => {},
  city: undefined,
  setCity: (city: IPlace | undefined) => {},
};

export const CityContext = createContext(initialState);

export const CityProvider: FC = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState<IPlace | undefined>(undefined);

  return (
    <CityContext.Provider value={{ cityName, setCityName, city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
