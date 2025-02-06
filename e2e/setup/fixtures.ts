import { test as base } from "@playwright/test";
import PaginaLogin from "../page-objects/PaginaLogin";
import paginaPrincipal from "../page-objects/PaginaPrincipal";


export const test = base.extend<{ 
  paginaLogin: PaginaLogin,
  paginaPrincipal: paginaPrincipal
  
  }>({
  paginaLogin: async ({ page }, use) => {
    const paginaLogin = new PaginaLogin(page);
    await paginaLogin.visitar();
    await use(paginaLogin);
  },

  paginaPrincipal: async ({ page }, use) => {
    const paginaLogin = new paginaPrincipal(page);
    await paginaLogin.visitar();
    await use(paginaLogin);
  }

});