export class AddUserPage{

    addUserDetails(first_name, last_name, username, password, customer, role, email, cellphone){
        cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').clear().type(first_name)
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').clear().type(last_name)
        cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').clear().type(username)
        cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine').clear().type(password)

        if (customer == 'AAA'){
            cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine').click()
        } else{
            cy.get(':nth-child(2) > :nth-child(2) > .ng-pristine').click()
        }
        
        cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select(role)
        cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').clear().type(email)
        cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').clear().type(cellphone)

    }

    clickSaveButton(){
        cy.get('.btn-success').click()
    }

    clickCancelButton(){
        cy.get('.btn-danger').click()
    }
}