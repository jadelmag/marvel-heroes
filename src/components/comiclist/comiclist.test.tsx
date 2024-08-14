import ComicList, { FullComic } from "@/components/comiclist/comiclist";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ComicList", () => {
  const comics: FullComic[] = [
    { name: "Comic 1", url_picture: "http://example.com/comic1.jpg" },
    { name: "Comic 2", url_picture: "http://example.com/comic2.jpg" },
    { name: "Comic 3", url_picture: "http://example.com/comic3.jpg" },
  ];

  it("should render a list of comic covers and titles", () => {
    render(<ComicList comics={comics} />);

    comics.forEach((comic) => {
      expect(screen.getByAltText(comic.name)).toBeInTheDocument();
      expect(screen.getByText(comic.name)).toBeInTheDocument();
    });
  });

  it("should render correctly with no comics", () => {
    render(<ComicList comics={[]} />);

    expect(screen.queryByAltText("Comic 1")).toBeNull();
    expect(screen.queryByText("Comic 1")).toBeNull();
    expect(screen.queryByAltText("Comic 2")).toBeNull();
    expect(screen.queryByText("Comic 2")).toBeNull();
    expect(screen.queryByAltText("Comic 3")).toBeNull();
    expect(screen.queryByText("Comic 3")).toBeNull();
  });
});
