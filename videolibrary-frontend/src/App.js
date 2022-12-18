import "./App.css";
import { createContext, useState } from "react";
import React from "react";
import FileForm from "../../videolibrary-frontend/src/components/FileForm";
import LatestVideo from "../../videolibrary-frontend/src/components/LatestVideo";

export const AppContext = createContext(null);

function App() {
  const [latestVideo, setLatestVideo] = useState(AppContext);
  return (
    <AppContext.Provider value={{ latestVideo, setLatestVideo }}>
      <div className="App">
        <FileForm />
        <LatestVideo />
      </div>
    </AppContext.Provider>
  );
}

export default App;