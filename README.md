# v0-bt5-vue
Projeto inicial para outros projetos com [__vue3__](https://vuejs.org/) e [__bootstrap5__](https://getbootstrap.com/)

O esperado de um projeto incial:
- [x] Mudar de tema (claro / escuro)
- [x] Fazer o auto do tema (detecta preferência do sistema)
- [x] Multi línguas ([vue-i18n](https://vue-i18n.intlify.dev/))
- [x] Colocar mais palavras na tradução (i18n.json)
- [ ] Colocar os ícones do bootstrap5
- [ ] Pensar no site com a pasta layouts?!?
- [ ] Busca interna ??? [algolia](https://www.algolia.com/developers) [typesense](https://typesense.org/)
- [ ] Blog / Notícias ???
- [ ] Mais frameworks CSS??? (ex: beer, taywind)
- [ ] Mais modelos de rodapé e menu principal
- [ ] Criar temas ou templates. Exemplo de lista no site [startbootstrap](https://startbootstrap.com/templates?showPro=false&showAngular=false&showVue=false)


## Como Contribuir e Expandir

Este boilerplate foi projetado para ser modular e fácil de expandir. Aqui estão alguns guias para tarefas comuns:

### Como adicionar uma nova página (View)

1.  **Crie o arquivo da View:** Adicione um novo arquivo `.vue` na pasta `src/views/`. Por exemplo: `src/views/NovaPagina.vue`.
2.  **Adicione a Rota:** Abra o arquivo `src/router/index.ts` e adicione um novo objeto de rota ao array `routes`.
    ```javascript
    {
      path: '/nova-pagina',
      name: 'NovaPagina',
      component: () => import('@/views/NovaPagina.vue')
    }
    ```
3.  **Adicione o Link de Navegação (Opcional):** Para que a nova página apareça no menu, adicione a tradução do nome da rota em `src/i18n.json` dentro da seção `routes` e o componente `NavBar` irá renderizá-la automaticamente.

### Estrutura de Componentes

O projeto utiliza uma abordagem de componentes para manter o código organizado.

-   **`App.vue`:** É o componente raiz que contém a estrutura principal da página.
-   **`src/components/`:** Contém componentes reutilizáveis como `NavBar.vue` e `FooterBar.vue`. Sinta-se à vontade para criar seus próprios componentes aqui e importá-los onde precisar.

### Internacionalização (i18n)

Para adicionar ou modificar textos, edite o arquivo `src/i18n.json`.

-   **Para usar um texto no seu template:** Use a função `t()` com a chave correspondente do JSON.
    ```html
    <p>{{ t('sua.chave.de.traducao') }}</p>
    ```

## Referências:
- [howbizarre](https://github.com/howbizarre/starter-template-vue-3-bootstrap-5-sass-dark-theme-typescript)
- [danielschmitz - kitchenStock](https://github.com/danielschmitz/kitchenStock-vue3)
- [danielschmitz - vue3-book](https://github.com/danielschmitz/kitchen-app-vue3-book)
- [danielschmitz - livro vue3 grátis](https://leanpub.com/book-vue-br)

## Preparando o ambiente de desenvolvimento (vscode):
Instalar o [vscode](https://code.visualstudio.com/Download) com os plugins:
- [Vue - official - Prioridade!!!](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Console Ninja](https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)



## Como começar

Crie um novo repositório a partir do modelo e use seu gerenciador de pacotes favorito para instalá-lo. Utilizando NPM os comandos são:

### Install

```bash
npm install
```

### Ambiente de Desenvolvimento

```bash
npm run dev
```

### Build

Certifique-se de que todas as configurações revisadas sobre o script de construção estejam no arquivo package.json e nos arquivos .env.[mode].

```bash
npm run build
```
### Documentação
Foram adicionados e removidos textos no arquivo json, alteração na página sobre nós, remoção de tag's sem valor, e também definição de um link na imagem do footer. Criação de uma function para verificar se os campos estão preenchidos, e retorno de feedback para cada envio, retornando sucesso ou erro através de um boleano, tipagem e formatação dos dados inseridos no formulário.
