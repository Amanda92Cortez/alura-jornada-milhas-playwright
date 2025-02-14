<div align="center">
  <h1 align="center">
    Alura - Jornada milhas playwright
    <br />
    <br />
    <img src="/img/banner.avif" alt="Banner">
    <br />
  </h1>

  <h2> 
  
  :construction: Projeto em construção :construction:
  <!-- :white_check_mark: Projeto finalizado -->
  </h2>
</div>


---

# :file_folder: Índice 

- [Descrição do Projeto](#id01)
- [Ferramentas](#id02)
- [Desafio](#id04)
- [Instalação](#id03)

---

# :pushpin: Descrição do Projeto <a name="id01"></a>
O Jornada Milhas é uma StartUP fictícia. Atualmente, é um site onde podemos buscar por passagens de avisão e até filtrar seus resultados por preços, conexões e companhias. Também conta com as funcionalidades de cadastro, login e edição de perfil.

` Curso: ` Angular: escreva testes end-to-end com Playwright

` Curso: ` Angular: teste e otimize o fluxo de autenticação com Playwright

---

# :computer: Ferramentas<a name="id02"></a>

<div style="display: flex; gap: 10px;">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="CSS">
  
</div>

---
# 🎯 Desafio <a name="id04"></a>
<img src="/img/jornadaMilha_play.gif" alt="Gif">

---

# 🗂 Instalações <a name="id03"></a>
#### Baixar Projeto e instalações
```bash
    # Clonar o repositório
    $ git clone https://github.com/Amanda92Cortez/alura-jornada-milhas-playwright.git

    # Entrar no diretório da pasta
    $ cd pasta
    $ npm init playwright@latest
```

#### ❎ Rodando automação (Playwritght)

```bash
# Playwritght
# Executar Playwrigth
npx playwright show-report 

# Você já sabe como rodar todos os testes do projeto:
# npx playwright test # ou usando nosso script "e2e":
npm run e2e

# Para rodar os testes apenas em um tipo de navegador, use a flag --project:
# npx playwright test --project=chromium # ou usando nosso script "e2e": 
npm run e2e -- --project=chromium # o hífen duplo "--" é necessário para adicionar flags ao script

# Para rodar os testes de um único arquivo, passe o nome dele:
npm run e2e example.spec.ts -- --project=chromium

# Para rodar os arquivos de testes que contêm example ou PaginaInicial no nome (irá rodar ambos example.spec.ts e visitarPaginaInicial.spec.ts), passe essas palavras para o comando
npm run e2e example PaginaInicial -- --project=chromium

# Para rodar testes a partir de seus títulos, use a flag -g
npm run e2e -- -g "página inicial" --project=chromium

```

---

Feito com ❤️ por Amanda Cortez 👋🏽 [Acesse meu linkedin!](www.linkedin.com/in/amandacortez92)
