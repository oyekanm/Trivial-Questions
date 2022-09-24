import React, { createContext, useState } from "react";

import Hooks from "./components/Hooks";
import Hook from "./components/Hook";

export const AppContext = createContext(null);

function App() {
  const [load, setLoad] = useState(true);

  return (
    <AppContext.Provider value={{ load, setLoad }}>
      <Hooks />
      <Hook />
    </AppContext.Provider>
  );
}

export default App;
