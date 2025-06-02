import { createContext, useState } from "react";

export const ReceiveInfoContext = createContext();

export function ReceiveInfoProvider(props) {
  const [receiveInfo, setReceiveInfo] = useState({
    name: "",
    option: 0,
    price: 0,
    flag: false,
  });

  const setInfo = ({ name, option, price, flag = false }) => {
    setReceiveInfo({ name, option, price, flag });
  };

  const data = {
    receiveInfo: receiveInfo,
    setInfo,
  };

  return (
    <ReceiveInfoContext.Provider value={data}>
      {props.children}
    </ReceiveInfoContext.Provider>
  );
}
