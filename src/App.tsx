import React from "react";
import "./App.css";

import { HomeLayout } from "./pages/HomeLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App flex h-screen">
      <HomeLayout>
        <HomePage />
      </HomeLayout>
    </div>
  );
}

export default App;
