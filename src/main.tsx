import { FavsProvider } from "@/contexts/favContext";
import { HeroesProvider } from "@/contexts/heroContext";
import { LoaderProvider } from "@/contexts/loaderContext";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "@/router/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LoaderProvider>
    <HeroesProvider>
      <FavsProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </FavsProvider>
    </HeroesProvider>
  </LoaderProvider>
);
