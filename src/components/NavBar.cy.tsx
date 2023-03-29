import React from 'react'
import NavBar from './NavBar'

describe('<NavBar />', () => {
  

  beforeEach(() => {
    cy.mount(<NavBar pages={[
      {name : "Page1", path : "Path1"},
      {name : "Page2", path : "Path1"}
    ]}/>)
  })
  

  it("renders nav pages", () => {
    cy.get("#navbar-pages").contains("Page1")
  })

  it("Visible menu buttom on small screens", () => {
    cy.viewport( 'samsung-s10');

    cy.get("#navbar-menu-buttom").should("be.visible");
    cy.get("#navbar-pages").should("not.be.visible");

  })

  it("Visible NavBar pages on larger screens", () => {
    cy.viewport(1600, 900);
    cy.get("#navbar-pages").should("be.visible");
    cy.get("#navbar-menu-buttom").should("not.be.visible");
  })

  it("Pages of NavBar is coherent", () => {
    cy.get("#navbar-pages").contains("Page1")
    cy.get("#navbar-pages").contains("Page2")
  });

  it("Pages of MenuPanel is coherent", () => {
    cy.get("#navbar-menu-panel").contains("Page1");
    cy.get("#navbar-menu-panel").contains("Page2");

  })
})