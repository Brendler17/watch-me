<h1 align="center">WatchMe</h1>

<h4 align="center">
  
[Descrição](#desc)  |  [Funcionalidades](#func)  |  [Rodando localmente](#local)

<br>

<h2 id="desc">
💻 Sobre o Projeto
</h2>

<p align="justify">
O WatchMe é uma pequena aplicação onde o seu principal objetivo é listar filmes de acordo com o gênero informado. 
É o segundo desafio do treinamento Ignite, tendo como objetivo refatorar a página da aplicação (gerada por um template clonado), 
dividindo a aplicação em pelo menos duas partes principais: 
sidebar com a listagem de gêneros e o conteúdo principal que possui o header e a listagem de filmes. 
Foi alterado todo código da aplicação que estava em `App.jsx`, repassando esse código para outros dois componentes filhos (SideBar e Content)
criando um compartilhamento de estados utilizando as propriedades. Foi criado também um componente `Header.jsx`, que é chamado pelo Content e tem como
função exibir o título dinâmico, através do estado que está sendo compartilhado de `App.jsx`
  
<br><br>
  <a href="https://www.notion.so/Desafio-02-Componentizando-a-aplica-o-b9f0f025c95b437699d0c3115f55b0f1">Link do Desafio</a>
</p>

<br>

<h2 id="func">⚔ Funcionalidades Implementadas</h2>

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- No componente `SideBar` deve ser possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O componente `Content` deve alterar seu conteúdo a partir da categoria selecionada;
- O componente `Header` deve ter o título dinâmico de acordo com a categoria;

<br>

<h2 id="local">
⚛ Rodando Aplicação Localmente
</h2>

> **⚠ Atenção !** <br> Antes de prosseguir com o passo a passo abaixo você precisa ter instalado em sua máquina o gerenciador de pacote [Yarn](https://classic.yarnpkg.com/en/docs/install) e o [Git](https://git-scm.com).

<br>

> 📝 Clonando o repositório e entrando no diretório criado.

```shell
git clone https://github.com/Brendler17/watch-me.git && cd watch-me
```

> 📝 Baixando / Instalando dependências.

```shell
yarn
```

> 📝 Rodando Aplicação

```shell
yarn dev
```

> Pronto 🎉 se tudo ocorreu conforme o esperado 😁 a aplicação estará
> rodando na porta 8080. Basta acessar o endereço no navegador
> http://localhost:8080 e você verá a aplicação funcionando.
