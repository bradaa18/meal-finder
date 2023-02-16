import Select from "react-select/base";
import * as React from 'react';
import App from '../../src/App';
import CategoryMeal from "../../src/CategoryMeal";
import CategoryMeals from "../../src/CategoryMeals";
describe('component_testing', () => {
  it('check text', () => {
      cy.mount(<App/>)
          cy.get("h1").contains("Meal-Finder");

  })
    it('check button', () => {
        cy.mount(<App/>)
       cy.get('#selectCategory').contains("Beef");
    })
    it('check button', () => {
        cy.mount(<App/>)
        cy.get('button').contains('Get Random Meal')
    })

})


