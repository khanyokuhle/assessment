import {AddUserPage} from '../pages/addUserPage'

const userDetailsObj = new AddUserPage()

describe('Users Test Suite', () => {

  beforeEach(() => {
    cy.visit('http://www.way2automation.com/angularjs-protractor/webtables/')
  })

  it('TC: Add a user', () => {
    
    cy.fixture('userData').then((user) => {
      user.forEach((user) => {
        
        cy.get('thead > :nth-child(2) > td > .btn').click()
        
        let username = "user" + Date.now()

        userDetailsObj.addUserDetails(
          user.first_name, user.last_name, username, user.password, user.customer, user.role, user.email, user.cell)
          
        userDetailsObj.clickSaveButton()

        cy.contains(username)
      })
    })
  })

  it('TC: Verify close button', () => {
    cy.fixture('userData').then((user) => {
        
        cy.get('thead > :nth-child(2) > td > .btn').click()

        userDetailsObj.addUserDetails(
          'name', 'surname', 'username000', 'password', 'AAA', 'Admin', 'a@email.com', '1234567890')
          
        userDetailsObj.clickCancelButton()

        cy.contains('username000').should('not.exist')
    })
  })
})