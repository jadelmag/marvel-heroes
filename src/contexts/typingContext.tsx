import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";
  
  export interface TypingState {
    typing: boolean;
    setTyping(typing: boolean): void;
  }
  
  export const defaultTypingState: TypingState = {
    typing: false,
    setTyping: (typing: boolean) => typing,
  };
  
  const TypingContext = createContext(defaultTypingState);
  
  export const useTyping = () => useContext(TypingContext);
  
  export const TypingProvider: React.FC<PropsWithChildren<unknown>> = ({
    children,
  }) => {
    const [typing, setTyping] = useState<boolean>(false);
    const value = useMemo(() => ({ typing, setTyping }), [typing, setTyping]);
  
    return (
      <TypingContext.Provider value={value}>{children}</TypingContext.Provider>
    );
  };
  