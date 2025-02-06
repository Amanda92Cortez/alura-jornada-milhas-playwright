import { test as base } from "@playwright/test";
import PaginaPrincipal from "../page-objects/PaginaPrincipal";
import PaginaLogin from "../page-objects/PaginaLogin";
import PaginaCadastro from "../page-objects/PaginaCadastro";

export const test = base.extend<{
  paginaPrincipal: PaginaPrincipal,
  paginaLogin: PaginaLogin,
  paginaCadastro: PaginaCadastro
}>({
  paginaPrincipal: async ({ page }, use) => {
    const paginaPrincipal = new PaginaPrincipal(page);
    await use(paginaPrincipal);
  },
  paginaLogin: async ({ page }, use) => {
    const paginaLogin = new PaginaLogin(page);
    await use(paginaLogin);
  },
  paginaCadastro: async ({ page }, use) => {
    const paginaCadastro = new PaginaCadastro(page);
    await use(paginaCadastro);
  },
});