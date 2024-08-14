import { UIHeader } from "@/components/index";
import { ROUTE } from "@/constants/routes.constants";
import { useFavs } from "@/context/favcontext";
import {
  DescriptionPage,
  FavsPage,
  HomePage,
  NotFoundPage,
} from "@/views/index";
import { Route, Routes, useNavigate } from "react-router-dom";

export const Router: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { favs } = useFavs();

  return (
    <>
      <UIHeader navigate={navigate} favs={favs} />
      <Routes>
        <Route path={ROUTE.HOME} element={<HomePage navigate={navigate} />} />
        <Route path={ROUTE.FAVS} element={<FavsPage navigate={navigate} />} />
        <Route path={ROUTE.DESCRIPTION} element={<DescriptionPage />} />
        <Route path={ROUTE.DEFAULT} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
