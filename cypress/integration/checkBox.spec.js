/// <reference types="cypress" />

import checkBoxElements from "../pageObjects/checkBox";

describe("Actionable Elements - Check Box", () => {
  beforeEach(function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.restoreLocalStorage();
  });

  var itemText;

  it("should verify check box - Screen Title.", () => {
    cy.get(checkBoxElements.check_Box)
      .should("be.visible")
      .click()
      .then((item) => {
        itemText = item.text();
        cy.get(checkBoxElements.page_Title).should("have.text", itemText);
      });
  });

  it("should select & verify all radio buttons.", () => {
    cy.get(checkBoxElements.toggle).should("be.visible").click();

    cy.get("span")
      .find(checkBoxElements.checkBox_Name)
      .eq(0)
      .then((home) => {
        const homeText = home.text();
        console.log("@###########", homeText);

        cy.get("ol").children("li").find(checkBoxElements.toggle).eq(1).click();

        cy.get("span")
          .find(checkBoxElements.checkBox_Name)
          .eq(1)
          .then((desktop) => {
            const desktopText = desktop.text().toLowerCase();

            cy.get("ol")
              .children("li")
              .find(checkBoxElements.toggle)
              .eq(2)
              .click();

            cy.get("span")
              .find(checkBoxElements.checkBox_Name)
              .eq(2)
              .then((notes) => {
                const notesText = notes.text().toLowerCase();

                cy.get(checkBoxElements.notes_checkBox).check({ force: true });

                cy.get(checkBoxElements.selected_checkBox)
                  .eq(0)
                  .should("have.text", `${notesText}`);

                cy.get("span")
                  .find(checkBoxElements.checkBox_Name)
                  .eq(3)
                  .then((commands) => {
                    const commandsText = commands.text().toLowerCase();

                    cy.get(checkBoxElements.commands_checkBox).check({
                      force: true,
                    });

                    cy.get(checkBoxElements.selected_checkBox)
                      .eq(2)
                      .should("have.text", `${commandsText}`);

                    cy.get(".text-success")
                      .eq(0)
                      .should("have.text", `${desktopText}`);
                  });
              });
          });
      });

    cy.get("span")
      .find(checkBoxElements.checkBox_Name)
      .eq(4)
      .then((documents) => {
        const documentsText = documents.text().toLowerCase();

        cy.get("ol").children("li").find(checkBoxElements.toggle).eq(3).click();

        cy.get("span")
          .find(checkBoxElements.checkBox_Name)
          .eq(5)
          .then((workSpace) => {
            const workSpaceText = workSpace.text().toLowerCase();

            cy.get(checkBoxElements.workSpace_checkBox).check({ force: true });

            cy.get("span")
              .find(checkBoxElements.checkBox_Name)
              .eq(6)
              .then((react) => {
                const reactText = react.text().toLowerCase();

                cy.get(checkBoxElements.react_checkBox).check({ force: true });

                cy.get("span")
                  .find(checkBoxElements.checkBox_Name)
                  .eq(7)
                  .then((angular) => {
                    const angularText = angular.text().toLowerCase();

                    cy.get(checkBoxElements.angular_checkBox).check({
                      force: true,
                    });

                    cy.get("span")
                      .find(checkBoxElements.checkBox_Name)
                      .eq(8)
                      .then((veu) => {
                        const veuText = veu.text().toLowerCase();

                        cy.get(checkBoxElements.veu_checkBox).check({
                          force: true,
                        });

                        cy.get("span")
                          .find(checkBoxElements.checkBox_Name)
                          .eq(9)
                          .then((office) => {
                            const officeText = office.text().toLowerCase();

                            cy.get("ol")
                              .children("li")
                              .find(checkBoxElements.toggle)
                              .eq(4)
                              .click();

                            cy.get("span")
                              .find(checkBoxElements.checkBox_Name)
                              .eq(10)
                              .then((publicRadio) => {
                                const publicRadioText = publicRadio
                                  .text()
                                  .toLowerCase();

                                cy.get(checkBoxElements.public_checkBox).check({
                                  force: true,
                                });

                                cy.get("span")
                                  .find(checkBoxElements.checkBox_Name)
                                  .eq(11)
                                  .then((privateRadio) => {
                                    const privateRadioText = privateRadio
                                      .text()
                                      .toLowerCase();

                                    cy.get(
                                      checkBoxElements.private_checkBox
                                    ).check({
                                      force: true,
                                    });

                                    cy.get("span")
                                      .find(checkBoxElements.checkBox_Name)
                                      .eq(12)
                                      .then((classified) => {
                                        const classifiedText = classified
                                          .text()
                                          .toLowerCase();

                                        cy.get(
                                          checkBoxElements.classified_checkBox
                                        ).check({
                                          force: true,
                                        });

                                        cy.get("span")
                                          .find(checkBoxElements.checkBox_Name)
                                          .eq(13)
                                          .then((general) => {
                                            const generalText = general
                                              .text()
                                              .toLowerCase();

                                            cy.get(
                                              checkBoxElements.general_checkBox
                                            ).check({
                                              force: true,
                                            });

                                            cy.get(
                                              checkBoxElements.selected_checkBox
                                            )
                                              .eq(12)
                                              .should(
                                                "have.text",
                                                `${generalText}`
                                              );
                                          });

                                        cy.get(
                                          checkBoxElements.selected_checkBox
                                        )
                                          .eq(11)
                                          .should(
                                            "have.text",
                                            `${classifiedText}`
                                          );
                                      });
                                    cy.get(checkBoxElements.selected_checkBox)
                                      .eq(10)
                                      .should(
                                        "have.text",
                                        `${privateRadioText}`
                                      );
                                  });

                                cy.get(checkBoxElements.selected_checkBox)
                                  .eq(9)
                                  .should("have.text", `${publicRadioText}`);
                              });

                            cy.get(checkBoxElements.selected_checkBox)
                              .eq(8)
                              .should("have.text", `${officeText}`);
                          });

                        cy.get(checkBoxElements.selected_checkBox)
                          .eq(7)
                          .should("have.text", `${veuText}`);
                      });

                    cy.get(checkBoxElements.selected_checkBox)
                      .eq(6)
                      .should("have.text", `${angularText}`);
                  });

                cy.get(checkBoxElements.selected_checkBox)
                  .eq(5)
                  .should("have.text", `${reactText}`);
              });

            cy.get(checkBoxElements.selected_checkBox)
              .eq(4)
              .should("have.text", `${workSpaceText}`);
          });

        cy.get(checkBoxElements.selected_checkBox)
          .eq(3)
          .should("have.text", `${documentsText}`);
      });

    cy.get("span")
      .find(checkBoxElements.checkBox_Name)
      .eq(14)
      .then((downloads) => {
        const downloadsText = downloads.text().toLowerCase();

        cy.get("ol").children("li").find(checkBoxElements.toggle).eq(5).click();

        cy.get("span")
          .find(checkBoxElements.checkBox_Name)
          .eq(15)
          .then((wordFileDoc) => {
            const wordFileDocText = wordFileDoc.text().toLowerCase();

            cy.get(checkBoxElements.wordFile_checkBox).check({ force: true });

            cy.get("span")
              .find(checkBoxElements.checkBox_Name)
              .eq(16)
              .then((excelFileDoc) => {
                const excelFileDocText = excelFileDoc.text().toLowerCase();
                cy.log(excelFileDocText);

                cy.get(checkBoxElements.excelFile_checkBox).check({
                  force: true,
                });

                cy.get(checkBoxElements.selected_checkBox)
                  .eq(16)
                  .then((excelitem) => {
                    const excelitemText = excelitem.text().toLowerCase();
                    cy.log(excelitemText);
                  });
              });

            cy.get(checkBoxElements.selected_checkBox)
              .eq(15)
              .then((worditem) => {
                const worditemText = worditem.text().toLowerCase();
                cy.log(worditemText);
              });
          });

        cy.get(checkBoxElements.selected_checkBox)
          .eq(14)
          .should("have.text", `${downloadsText}`);
      });
  });

  afterEach(() => {
    cy.screenshot();
    cy.saveLocalStorage();
  });
});
