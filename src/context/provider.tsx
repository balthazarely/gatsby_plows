import React, { createContext, useState, FC } from 'react';

type ContextState = {
  menuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  currentPage: string;
  changeCurrentPageString: (str: string) => void;
};

const contextDefaultValues: ContextState = {
  menuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  currentPage: '/',
  changeCurrentPageString: () => {},
};

export const GlobalContext = createContext<ContextState>(contextDefaultValues);

const GlobalProvider: FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(
    contextDefaultValues.menuOpen
  );
  const [currentPage, setCurrentPage] = useState<string>(
    contextDefaultValues.currentPage
  );

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const changeCurrentPageString = (str: string) => setCurrentPage(str);

  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        openMenu,
        closeMenu,
        currentPage,
        changeCurrentPageString,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
