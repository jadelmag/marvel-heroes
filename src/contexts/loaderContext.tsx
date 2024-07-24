import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export interface LoaderState {
  loading: boolean;
  setLoading(loading: boolean): void;
}

export const defaultLoaderState: LoaderState = {
  loading: false,
  setLoading: (loading: boolean) => loading,
};

const LoaderContext = createContext(defaultLoaderState);

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const value = useMemo(() => ({ loading, setLoading }), [loading, setLoading]);

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
