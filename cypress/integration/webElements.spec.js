/// <reference types="cypress" />

import inputElements from "../pageObjects/webElements";

describe("Actionable Elements", () => {
  beforeEach(function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.restoreLocalStorage();
  });

  var cardNameText;
  var headerText;

  it("should visit demoqa.com", () => {
    // by using `cy.visit` command it will redirect to landing screen
    cy.visit("https://demoqa.com/");
  });

  it("should open elements top-card screen", () => {
    // We use the `cy.get()` cmd to get all elements that match the selector.
    // Then, We use the `childern()` cmd to get childern selector.
    // we use the `first()` to get element first index.
    // we use `find()` cmd to find specific element in parent element
    // we use `should` to assert that there are two matched items
    cy.get(inputElements.category_cards)
      .children(inputElements.top_card)
      .first()
      .find(inputElements.card_text)
      .should("be.visible")
      .click()
      .then((cardName) => {
        cardNameText = cardName.text();
        console.log(cardNameText);

        cy.get(inputElements.page_Title)
          .should("be.visible")
          .then((header) => {
            headerText = header.text();
            console.log(headerText);

            // to verify the selected item text should be same
            expect(cardNameText).to.equal(headerText);
          });
      });
    // to verify landing URL include elements parameter or not.
    cy.url().should("include", "elements");
  });

  afterEach(() => {
    cy.screenshot();
    cy.saveLocalStorage();
  });
});
