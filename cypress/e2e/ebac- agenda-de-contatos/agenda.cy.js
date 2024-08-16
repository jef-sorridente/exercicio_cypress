describe("Testar funcionalidades, inlcusão, alteracao e remoção de um contao", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });

  //inclusão de contato
  it("Deve realizar a inclusão de um contato", () => {
    cy.get('[type="text"]').type("Jeferson Soares");
    cy.get('[type="email"]').type("jeferson.soares@gmail.com");
    cy.get('[type="tel"]').type("51 9 97977979");
    cy.get(".adicionar").click();
  });

  //Ao ser adicionado contato é renderizado como ultimo na lista
  //Para editar e excluir o contato adicionado anteriormente
  //Utilizar a função .last para pegar o ultimo componente que estiver com ".edit"
  //alteracao de contato
  it("Deve realizar a alteracao do contato", () => {
    cy.get(".edit").last().click();
    cy.get('[type="text"]').clear().type("Fatima Bernardes");
    cy.get('[type="email"]').clear().type("fatimabernardes@gmail.com");
    cy.get('[type="tel"]').clear().type("51 9 95955959");
    cy.get(".alterar").click();
  });

  //remoção de contato
  it("Deve deletar o contato", () => {
    cy.get(".delete").last().click();
  });
});
