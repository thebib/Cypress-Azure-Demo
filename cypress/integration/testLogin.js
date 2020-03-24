context('e2e Demo Tests', () => {
  beforeEach(() => {
    cy.visit('https://mp-sit-as.azurewebsites.net/login')
  })
  
  it('Perform Login', () => {
    cy.get('[data-spec="username"]').type("robert.gaskin@answerdigital.com")
	cy.get('[data-spec="password"]').type("Password123!")
	cy.get('[data-spec="login-myrps-btn"]').click()
	cy.get("[data-spec='passphrase1Expected']").then(($btn) => { 
	 let number = parseInt($btn.text().substring(0))
	 let toType = "Darlingt0n".charAt(number - 1)
		cy.get('[data-spec="passphrase1Input"]').type(toType)
	})
	cy.get("[data-spec='passphrase2Expected']").then(($btn) => { 
	 let number = parseInt($btn.text().substring(0))
	 let toType = "Darlingt0n".charAt(number - 1)
		cy.get('[data-spec="passphrase2Input"]').type(toType)	
	})
	cy.get("[data-spec='passphrase3Expected']").then(($btn) => { 
	 let number = parseInt($btn.text().substring(0))
	 let toType = "Darlingt0n".charAt(number - 1)
		cy.get('[data-spec="passphrase3Input"]').type(toType)
	})
	
	cy.get("[data-spec='login-myrps-btn']").click()
	cy.get("[data-spec='desktop-logout-btn']").should('be.visible')
	cy.get("[data-spec='desktop-logout-btn']").click()
  })
})