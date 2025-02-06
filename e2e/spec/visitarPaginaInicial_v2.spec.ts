import { test, expect } from '@playwright/test';

test.describe("Página Inicial", () =>{
    test("Deve visitar página inicial", async ( { page }) =>{
        await page.goto("/"); //Ação
        await expect(page).toHaveTitle("Jornada Milhas"); // asserção

        const tituloPassagens = page.getByTestId('titulo-passagens');
        await expect(tituloPassagens).toBeVisible();

        const tituloPromocoes = page.getByTestId('titulo-promocoes');
        await expect(tituloPromocoes).toBeVisible();

        const tituloDepoimentos = page.getByTestId('titulo-depoimentos');
        await expect(tituloDepoimentos).toBeVisible();

    })
})