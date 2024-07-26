import { ROUTE } from "@/constants/paths.constants";
import { routes } from "@/router/router";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Router Configuration", () => {
  it("should render MainPage and Header for the MAIN route", () => {
    const router = createMemoryRouter(routes, { initialEntries: [ROUTE.MAIN] });
    render(<RouterProvider router={router} />);
    const defaultItems = screen.getByText("0 Results");
    expect(defaultItems).toBeInTheDocument();
  });

  it("should render FavsPage and Header for the FAVS route", () => {
    const router = createMemoryRouter(routes, { initialEntries: [ROUTE.FAVS] });
    render(<RouterProvider router={router} />);
    const title = screen.getByText(/Favorites/i);
    expect(title).toBeInTheDocument();
  });

  it("should render DetailPage and Header for the DETAIL route", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [
        {
          pathname: ROUTE.DETAIL,
          state: {
            id: 0,
            name: "Hero",
            description: "Description Hero",
            picture: "Picture Hero",
            comics: null,
          },
        },
      ],
    });
    render(<RouterProvider router={router} />);

    const name = screen.getByText("Hero");
    expect(name).toBeInTheDocument();

    const description = screen.getByText("Description Hero");
    expect(description).toBeInTheDocument();

    const picture = screen.getByAltText("Hero hero");
    expect(picture).toBeInTheDocument();
  });

  it("should render NotFoundPage for an unknown route", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/unknown"] });
    render(<RouterProvider router={router} />);
    const title = screen.getByText("404 - Page Not Found");
    expect(title).toBeInTheDocument();
  });
});
