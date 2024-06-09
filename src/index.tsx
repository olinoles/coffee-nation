import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./pages/root";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { PageLayout } from "./pages/page-layout";
import { CafePage } from "./pages/cafe-page";
import { PointsBalancePage } from "./pages/points-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cafe/:cafeId",
        element: (
          <PageLayout>
            <CafePage />
          </PageLayout>
        ),
      },
      {
        path: "/points",
        element: (
          <PageLayout>
            <PointsBalancePage />
          </PageLayout>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
