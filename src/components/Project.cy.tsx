import React from 'react'
import Project from './Project'

describe("<Project>", () => {

    it("Can execute React Code", () => {
        cy.mount(<Project code='function ProjectCode() { return (<div>TEST2</div>) }; return ProjectCode;'/>)
        cy.contains("TEST2")
    })

})