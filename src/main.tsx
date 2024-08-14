import { FavsProvider } from "@/context/favcontext";
import { HeroesProvider } from "@/context/herocontext";
import { Router } from "@/router/router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavsProvider>
      <HeroesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </HeroesProvider>
    </FavsProvider>
  </StrictMode>
);
