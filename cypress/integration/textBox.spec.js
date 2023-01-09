/// <reference types="cypress" />

import inputElements from "../pageObjects/webElements";
import random_text from "../pageObjects/common";

describe("Actionable Elements - Text Box", () => {
  beforeEach(function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.restoreLocalStorage();
  });

  var itemText;
  var userName = "Test User " + random_text(3);
  var userEmail = "testUser@testing.com";
  var userCurrentAddress = "Test User current Adress" + random_text(3);
  var userPermanentAddress = "Test User permanent Address" + random_text(3);

  it("should verify text box - Screen Title", () => {
    cy.get(inputElements.text_Box)
      .should("be.visible")
      .click()
      .then((item) => {
        itemText = item.text();

        // to verify page title text should be correct
        cy.get(inputElements.page_Title).should("have.text", itemText);
      });
  });

  it("Should verify all text box - input fields", () => {
    cy.get(inputElements.userName).should("be.visible").type(userName);

    cy.get(inputElements.userEmail).should("be.visible").type(userEmail);

    // by using `type` command we fil the input field
    cy.get(inputElements.currentAddress)
      .should("be.visible")
      .type(userCurrentAddress);

    cy.get(inputElements.permanentAddress)
      .should("be.visible")
      .type(userPermanentAddress);

    cy.get(inputElements.submit_btn, { timeout: 2000 })
      .should("be.visible")
      .click({ force: true });

    // get user name text.
    cy.get(inputElements.entered_userName)
      .should("be.visible")
      .then((enterUserName) => {
        const enterUserNameText = enterUserName.text();

        // to verify enter username text should contain.
        expect(enterUserNameText).contains(userName);
      });

    // get user email text.
    cy.get(inputElements.entered_userEmail)
      .should("be.visible")
      .then((enterUserEmail) => {
        const enterUserEmailText = enterUserEmail.text();

        // to verify enter useremail text should contain.
        expect(enterUserEmailText).contains(userEmail);
      });

    // get user current address text.
    cy.get(inputElements.entered_currentAddress)
      .should("be.visible")
      .then((enterUserCurrentAddress) => {
        const enterUserCurrentAddressText = enterUserCurrentAddress.text();

        // to verify enter currentaddress text should contain.
        expect(enterUserCurrentAddressText).contains(userCurrentAddress);
      });

    // get user permanent address text.
    cy.get(inputElements.entered_permanentAddress)
      .should("be.visible")
      .then((enterUserPermanentAddress) => {
        const enterUserPermanentAddressText = enterUserPermanentAddress.text();

        // to verify enter permanentaddress text should contain.
        expect(enterUserPermanentAddressText).contains(userPermanentAddress);
      });
  });
  afterEach(() => {
    cy.screenshot();
    cy.saveLocalStorage();
  });
});
