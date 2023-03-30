import { expect } from "chai";
import React from "react"
import ProjectSearch from "./ProjectSearch"

describe("<ProjectSearch>", () => {
    let query = {};

    beforeEach( () => {
        cy.mount(<ProjectSearch onChangeQuery={ (newQuery ) => { query = newQuery;} }/>)
    })

    it ("Can Render", () => {
    })

    it ("Can query text", () => {
        expect(JSON.stringify(query)).equals("{}");

        cy.get("#project-search-field")
            .type("test")
            .wait(2000)
            .then( ()=> {
                expect(JSON.stringify(query)).equals('{"text":"test","tags":[]}')
            });
    })

    it ("Can query tag", () => {
        cy.get("#project-select-tags")
            .click()
            .get('li[data-value="Algorithm"]')
            .click()
            .then( () => {
                expect(JSON.stringify(query)).equals('{"text":"","tags":["Algorithm"]}')
            })
    })
})