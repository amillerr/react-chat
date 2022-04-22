import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Dialog from "./components/Dialog/Dialog";
import SendInput from "./components/SendInput/SendInput";

import { AppContext } from "./config/context";
import { getTheme, setTheme } from "./helpers/theme";

const App = () => {
  const [message, addMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
    <div className="container">
      <Header />
      <Dialog newMessage={message}/>
      <SendInput onAddMessage={addMessage}/>
    </div>
    </AppContext.Provider>
  );
};

export default App;