// cypress/e2e/mainPage.spec.js
import { DEFAULT_FAKE_RESPONSE } from "../fixtures/response";
import { WOLVERINE_FAKE_RESPONSE } from "../fixtures/wolverine";

describe("MainPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display a spinner while loading heroes", () => {
    cy.get(".marvel-body").find(".spinner").should("be.visible");
  });

  describe("Mock API Response Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should mock API response with 50 characters", () => {
      cy.intercept("GET", "**/public/characters**", {
        statusCode: 200,
        body: DEFAULT_FAKE_RESPONSE,
      }).as("getHeroes");

      cy.wait("@getHeroes");

      cy.get(".marvel-body").find(".spinner").should("not.exist");

      cy.get(".search-box > span").should("contain.text", "50 Results");

      cy.get(".hero-list").find(".hero-column").should("have.length", 50);

      cy.wait(3000);
    });

    it("should type a hero", () => {
      cy.get("input").type("Wolverine");
      cy.get("input").type("{enter}");

      cy.intercept("GET", "**/public/characters**", {
        statusCode: 200,
        body: WOLVERINE_FAKE_RESPONSE,
      }).as("getHeroe");

      cy.get(".marvel-body").find(".spinner").should("be.visible");

      cy.wait("@getHeroe");

      cy.get(".marvel-body").find(".spinner").should("not.exist");

      cy.get(":nth-child(1) > .hero-card > .hero-picture").click();

      cy.wait(3000);
    });

    it("should select favourites heroes and show it in favs page", () => {
      cy.intercept("GET", "**/public/characters**", {
        statusCode: 200,
        body: DEFAULT_FAKE_RESPONSE,
      }).as("getHeroes");

      cy.wait("@getHeroes");
      cy.get("#fav-button-3-D\\ Man").click();
      cy.get("#fav-button-Aaron\\ Stack").click();

      cy.get("#fav-button-undefined > svg > path").click();

      cy.wait(3000);
    });

    it("should select favourites heroes and unselect favs in favs page", () => {
      cy.intercept("GET", "**/public/characters**", {
        statusCode: 200,
        body: DEFAULT_FAKE_RESPONSE,
      }).as("getHeroes");

      cy.wait("@getHeroes");
      cy.get("#fav-button-3-D\\ Man").click();
      cy.get("#fav-button-Aaron\\ Stack").click();

      cy.get("#fav-button-undefined > svg > path").click();

      cy.get("#fav-button-3-D\\ Man").click();
      cy.get("#fav-button-Aaron\\ Stack").click();

      cy.wait(3000);
    });

    it("should select favourites page and go home", () => {
      cy.intercept("GET", "**/public/characters**", {
        statusCode: 200,
        body: DEFAULT_FAKE_RESPONSE,
      }).as("getHeroes");

      cy.wait("@getHeroes");
      cy.get("#fav-button-3-D\\ Man").click();

      cy.get("#fav-button-undefined > svg > path").click();

      cy.get("#header-icon").click();

      cy.wait(3000);
    });

    it("should select a hero and redirect to detail page", () => {
      cy.intercept("GET", "**/public/characters**", {
        statusCode: 200,
        body: DEFAULT_FAKE_RESPONSE,
      }).as("getHeroes");

      cy.wait("@getHeroes");
      cy.get(":nth-child(2) > .hero-card > .hero-picture").click();

      cy.wait(3000);
    });
  });
});
