import { test } from '../setup/fixtures';

test.describe("Página de Login", () => {
  test("Deve conseguir fazer login com email e senha válidos", async ({ paginaLogin , page}) => {
    // await paginaLogin.fazerLogin('antonio.evaldo@alura.com', '123456');
    await paginaLogin.fazerLogin('chunxiang9123@uorak.com', '123456');
    await paginaLogin.loginFeitoComSucesso();
  });

  test("Não deve conseguir fazer login com email inválido", async ({ paginaLogin }) => {
    await paginaLogin.fazerLogin('antonio.evaldo@alura.com', '123456');
    await paginaLogin.estaMostrandoMensagemDeErro('Você não está autorizado a acessar este recurso');
  });
});