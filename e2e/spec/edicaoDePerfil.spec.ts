import { gerarPerfil } from "../operacoes/gerarPerfil";
import { testeLogado } from "../setup/testeLogado";

testeLogado.describe("Página de perfil", () => {
  testeLogado("Deve conseguir editar o perfil", async ({ paginaPerfil }) => {
    await paginaPerfil.visitar();

    const novosDados = gerarPerfil();
    const emailAtual = await paginaPerfil.formBase.obterValorInputEmail();

    await paginaPerfil.atualizarUsuario({ ...novosDados, email: emailAtual });
    await paginaPerfil.atualizadoComSucesso();

    await paginaPerfil.visitar();
    await paginaPerfil.dadosEstaoCorretos({ ...novosDados, email: emailAtual });
  });

  testeLogado("Deve conseguir fazer logout", async ({ paginaPerfil }) => {
    await paginaPerfil.visitar();
    await paginaPerfil.deslogar();
    await paginaPerfil.deslogadoComSucesso();
  });
});