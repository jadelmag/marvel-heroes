import Header from "@/components/header/header";
import { ROUTE } from "@/constants/paths.constants";
import DetailPage from "@/pages/detail";
import NotFoundPage from "@/pages/error";
import FavsPage from "@/pages/favs";
import MainPage from "@/pages/main";
import { createBrowserRouter } from "react-router-dom";

export const routes = [
  {
    path: ROUTE.MAIN,
    element: (
      <div className="marvel">
        <Header />
        <MainPage />
      </div>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: ROUTE.FAVS,
    element: (
      <div className="marvel">
        <Header />
        <FavsPage />
      </div>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: ROUTE.DETAIL,
    element: (
      <div className="marvel">
        <Header />
        <DetailPage />
      </div>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: ROUTE.ERROR,
    element: (
      <div className="marvel">
        <Header />
        <NotFoundPage />
      </div>
    ),
  },
];

export const router = createBrowserRouter(routes, { basename: "/" });
