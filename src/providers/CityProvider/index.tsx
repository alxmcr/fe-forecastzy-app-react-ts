import { createContext, FC, useState } from "react";
import { StatusOperation } from "../../@types/apiTypes";
import { IPlace } from "../../@types/appTypes";

interface ICityProviderState {
  cityName: string;
  setCityName: (cityName: string) => void;
  city: IPlace | undefined;
  setCity: (city: IPlace | undefined) => void;
  statusCity: StatusOperation;
  setStatusCity: (statusCity: StatusOperation) => void;
  errorMessageCity: string;
  setErrorMessageCity: (errorMessageCity: string) => void;
}

const initialState: ICityProviderState = {
  cityName: "",
  setCityName: (cityName: string) => {},
  city: undefined,
  setCity: (city: IPlace | undefined) => {},
  statusCity: StatusOperation.IDLE,
  setStatusCity: (statusCity: StatusOperation) => {},
  errorMessageCity: "",
  setErrorMessageCity: (errorMessageCity: string) => {},
};

export const CityContext = createContext(initialState);

export const CityProvider: FC = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState<IPlace | undefined>(undefined);
  const [statusCity, setStatusCity] = useState<StatusOperation>(
    StatusOperation.IDLE
  );
  const [errorMessageCity, setErrorMessageCity] = useState<string>("");

  const value: ICityProviderState = {
    cityName,
    setCityName,
    city,
    setCity,
    statusCity,
    setStatusCity,
    errorMessageCity,
    setErrorMessageCity,
  };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};
