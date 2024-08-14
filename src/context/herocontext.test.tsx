/* eslint-disable react-hooks/exhaustive-deps */
import { HeroesProvider, useHeroes } from "@/context/herocontext";
import { Hero } from "@/modules/hero/hero.dto";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

const TestComponent: React.FC = () => {
  const { heroes, setHeroes } = useHeroes();

  const newHero: Hero = {
    id: 4,
    name: "Black Panther",
    thumbnail: { path: "blackpanther", extension: "jpg" },
    description: "The King of Wakanda.",
    comics: { available: 50, collectionURI: "", items: [], returned: 0 },
    modified: "",
    resourceURI: "",
    series: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
    stories: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
    events: {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    },
    urls: [],
  };

  React.useEffect(() => {
    const currentHeroes = [...heroes].concat(newHero);
    setHeroes(currentHeroes);
  }, []);

  return (
    <div>
      <h1>{heroes.length ? heroes[heroes.length - 1].name : "No Heroes"}</h1>
    </div>
  );
};

describe("HeroesContext", () => {
  it("should provide default HEROES from mock data", () => {
    const TestDefault: React.FC = () => {
      const { heroes } = useHeroes();
      return <div>{heroes.length ? "Has Heroes" : "No Heroes"}</div>;
    };

    render(
      <HeroesProvider>
        <TestDefault />
      </HeroesProvider>
    );

    expect(screen.getByText("No Heroes")).toBeInTheDocument();
  });

  it("should allow adding a new hero", () => {
    render(
      <HeroesProvider>
        <TestComponent />
      </HeroesProvider>
    );

    expect(screen.getByText("Black Panther")).toBeInTheDocument();
  });

  it("should update the list of heroes correctly", () => {
    const TestUpdate: React.FC = () => {
      const { heroes, setHeroes } = useHeroes();

      const newHero1: Hero = {
        id: 5,
        name: "Thor",
        thumbnail: { path: "thor", extension: "jpg" },
        description: "The God of Thunder.",
        comics: { available: 120, collectionURI: "", items: [], returned: 0 },
        modified: "",
        resourceURI: "",
        series: {
          available: 0,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        urls: [],
      };

      const newHero2: Hero = {
        id: 6,
        name: "Hulk",
        thumbnail: { path: "hulk", extension: "jpg" },
        description: "The strongest Avenger.",
        comics: { available: 150, collectionURI: "", items: [], returned: 0 },
        modified: "",
        resourceURI: "",
        series: {
          available: 0,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: "",
          items: [],
          returned: 0,
        },
        urls: [],
      };

      React.useEffect(() => {
        const currentHeroes = [...heroes].concat(newHero1).concat(newHero2);
        setHeroes(currentHeroes);
      }, []);

      return (
        <div>
          <h1>
            {heroes.length ? heroes[heroes.length - 1].name : "No Heroes"}
          </h1>
        </div>
      );
    };

    render(
      <HeroesProvider>
        <TestUpdate />
      </HeroesProvider>
    );

    expect(screen.getByText("Hulk")).toBeInTheDocument();
  });
});
