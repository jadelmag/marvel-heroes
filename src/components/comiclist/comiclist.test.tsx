import ComicList from "@/components/comiclist/comiclist";
import { Comics } from "@/modules/hero/hero.interface";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ComicList Component", () => {
  const comics: Comics = {
    available: 2,
    collectionURI: "http://example.com/api/comics",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/12345",
        name: "Comic 1",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/67890",
        name: "Comic 2",
      },
    ],
    returned: 2,
  };

  it("render spinner", () => {
    render(<ComicList comics={comics} />);
    const spinner = screen.getByRole("none");
    expect(spinner).toBeInTheDocument();
  });
});
