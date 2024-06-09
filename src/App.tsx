import React from "react";
import "./App.css";

import { HomeLayout } from "./pages/home-layout";
import { HomePage } from "./pages/home-page";

function App() {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
}

export default App;
