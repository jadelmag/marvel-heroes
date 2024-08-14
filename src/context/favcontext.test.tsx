/* eslint-disable react-hooks/exhaustive-deps */
import { FavHero, FavsProvider, useFavs } from "@/context/favcontext";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

const TestComponent: React.FC = () => {
  const { favs, setFavs } = useFavs();

  const hero: FavHero = {
    id: 1,
    name: "Spider-Man",
    picture: "spiderman.jpg",
    description: "Friendly neighborhood Spider-Man.",
    comics: { available: 100, collectionURI: "", items: [], returned: 0 },
  };

  React.useEffect(() => {
    setFavs([hero]);
  }, [setFavs]);

  return (
    <div>
      <h1>{favs.length ? favs[0].name : "No Favs"}</h1>
    </div>
  );
};

describe("FavsContext", () => {
  it("should provide default values", () => {
    const TestDefault: React.FC = () => {
      const { favs } = useFavs();
      return <div>{favs.length === 0 ? "No Favs" : "Has Favs"}</div>;
    };

    render(
      <FavsProvider>
        <TestDefault />
      </FavsProvider>
    );

    expect(screen.getByText("No Favs")).toBeInTheDocument();
  });

  it("should allow adding a favorite hero", () => {
    render(
      <FavsProvider>
        <TestComponent />
      </FavsProvider>
    );
    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
  });

  it("should update the list of favorite heroes", () => {
    const TestUpdate: React.FC = () => {
      const { favs, setFavs } = useFavs();

      const hero1: FavHero = {
        id: 1,
        name: "Spider-Man",
        picture: "spiderman.jpg",
        description: "Friendly neighborhood Spider-Man.",
        comics: { available: 100, collectionURI: "", items: [], returned: 0 },
      };

      const hero2: FavHero = {
        id: 2,
        name: "Iron Man",
        picture: "ironman.jpg",
        description: "Genius, billionaire, playboy, philanthropist.",
        comics: { available: 200, collectionURI: "", items: [], returned: 0 },
      };

      React.useEffect(() => {
        setFavs([hero1, hero2]);
      }, [setFavs]);

      return (
        <div>
          <h1>{favs.length ? favs[1].name : "No Favs"}</h1>
        </div>
      );
    };

    render(
      <FavsProvider>
        <TestUpdate />
      </FavsProvider>
    );
    expect(screen.getByText("Iron Man")).toBeInTheDocument();
  });
});
