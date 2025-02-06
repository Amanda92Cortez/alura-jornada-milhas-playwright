import { test, expect } from '@playwright/test';

test.describe("Página Inicial", () =>{
    test("Deve visitar página inicial", async ( { page }) =>{
        await page.goto("/"); //Ação
        await expect(page).toHaveTitle("Jornada Milhas"); // asserção

        const tituloPassagens = page.getByRole('heading', { name:'Passagens' });
        await expect(tituloPassagens).toBeVisible();

        const tituloPromocoes = page.getByRole('heading', { name:'Promoções' });
        await expect(tituloPromocoes).toBeVisible();

        const tituloDepoimentos = page.getByRole('heading', { name:'Depoimentos' });
        await expect(tituloDepoimentos).toBeVisible();

    })
})