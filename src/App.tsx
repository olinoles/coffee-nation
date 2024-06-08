import React from "react";
import "./App.css";

import { Layout } from "./pages/HomeLayout";

function App() {
  return (
    <div className="App flex h-screen">
      <Layout>
        <h1 className="text-white text-4xl">Hello World</h1>
      </Layout>
    </div>
  );
}

export default App;
