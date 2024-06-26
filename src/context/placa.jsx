import { createContext, useState } from "react";

export const PlacaContext = createContext("");

export const PlacaProvider = ({ children }) => {
  const [ placa, setPlaca ] = useState("");

  return (
    <PlacaContext.Provider value={{placa, setPlaca}}>
      {children}
    </PlacaContext.Provider>
  )
}

