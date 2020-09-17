describe('Teste cadastro de contato', () => {
    it('visits the app', () => {
        cy.visit('/')
    })
    it('click in button of register new contact', () => {
        cy.get('div').contains('Registrar').click()
    })
    it.skip('Preenche campo nome', () => {
        cy.get('input[id="name"]').type('Natalie Tolentino')
    })
    it.skip('Preenche campo email', () => {
        cy.get('input[id="email"]').type('natalietolentino9@gmail.com')
    })
    it.skip('Preenche campo telefone', () => {
        cy.get('input[id="phone"]').type('62985807215')
    })
    it.skip('Preenche campo descrição', () => {
        cy.get('textarea[id="description"]').type('Uma estudante muito feliz fazendo seus teste')
    })
    it('Escolhe categoria', () => {
        cy.contains('Categoria')
            .parent()
            .find(`input`)
            .click({ force: true })
            .type('Computação', { force: true });

        cy.wait(0);

        cy.get(`[class*="-menu"]`)
            .contains('Computação')
            .click();
    })

})