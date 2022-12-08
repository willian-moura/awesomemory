[🇺🇸 English version](./README.md)

<div id="top"></div>

<div align="center">
   <a href="#">
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> 
  </a>
   <a href="#">
      <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />    
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" /> 
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/Hasura-131a2a?style=for-the-badge&logo=hasura&logoColor=1db3d0" /> 
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/Firebase-F29D0C?style=for-the-badge&logo=firebase&logoColor=white" />
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
   </a>
   <a href="https://www.linkedin.com/in/willian-moura-43a129134" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
</div>

<br />
<div align="center">
  <a href="https://awesomemory.vercel.app" target="_blank"> 
    <img src="https://user-images.githubusercontent.com/30304867/184428713-c6e86704-7f5e-4355-8c61-a55b05382b4e.png" alt="Logo">
  </a>
</div>

<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a> 
    </li>
    <li><a href="#roadmap">Log de Funcionalidades</a></li> 
    <li>
      <a href="#getting-started">Rodando o Projeto</a> 
    </li>  
    <li><a href="#built-with">Tecnologias Utilizadas</a></li>
    <li><a href="#contact">Contato</a></li> 
    <li><a href="#license">Licença</a></li> 
  </ol>
</details>

## Sobre o Projeto
<a href="https://awesomemory.vercel.app" target="_blank">
  <img src="https://user-images.githubusercontent.com/30304867/184441201-007a09c2-4e34-49c1-81c7-9e6808155efc.png" alt="Logo">
</a> 

Já fazia um tempo que eu tinha a ideia de criar um jogo da memória usando os ícones da biblioteca Font Awesome, e gastava um tempo pensando em qual seria o nome do jogo, até que surge em minha cabeça o nome perfeito: AwesoMemory (awesome = incrível e memory = memória).

Então, aproveitei essa minha ideia para praticar algumas tecnologias que tinha vontade de aprender ou me aprofundar. Dessa forma, utilizei TypeScript, NextJS, Hasura, GraphQL, Apollo, Firebase e Vercel para desenvolver uma aplicação full stack onde você pode se divertir jogando o melhor jogo da memória já feito (`setModestia(0)`). No jogo é possível se cadastrar, logar, jogar, brigar pelas primeiras posições no ranking e ainda visualizar todos os ícones encontrados durante as partidas.
<br>


O projeto inteiro foi prototipado no Figma por mim utilizando a abordagem mobile first, dessa forma, apesar da visualização em desktops ser perfeitamente jogável, recomendo utilizar um dispositivo móvel para jogar.
<a href="https://www.figma.com/file/NBb6Ol3BkyXZz7lhvXmobr/AwesoMemory?node-id=103%3A926" target="_blank">Você pode ver o projeto no Figma aqui</a>
 

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## Log de Funcionalidades

- [x] Se cadastrar e logar
- [x] Jogar e salvar a duração da partida para o ranking
- [x] Salvar os ícones encontrados Save the found icons
- [ ] Recuperação de senha
- [ ] Troca de senha
- [ ] Raridade das cartas
- [ ] Criar mais modos de jogo
- [ ] Usar um ícone encontrado como ícone de perfil


<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

## Rodando o Projeto

### Instalando e Rodando Localmente
 
1. Clone o repositório
   ```bash
   
   git clone https://github.com/willian-moura/awesomemory.git
   
   ```
2. Instale os pacotes yarn/npm
   ```bash
   
   yarn || npm install 
   
   ```
3. Renomeie `.env.sample` para `.env` e preencha os valores:
   ```bash
    ## Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SANDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=

    ## Hasura Connection
    NEXT_PUBLIC_DEFAULT_URI_APOLLO=
   ```

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>

 ## Tecnologias Utilizadas

-   [React](https://pt-br.reactjs.org/)
-   [Next.js](https://nextjs.org/)
-   [Hasura](https://hasura.io/)  
-   [Apollo GraphQL](https://www.apollographql.com/docs/react/)
-   [Firebase](https://firebase.google.com/docs/)
-   [Vercel](https://vercel.com) 

## Contato
<a href="https://www.linkedin.com/in/willian-moura-43a129134" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/30304867?v=4" width="100px" alt="Willian Moura"/>
  <p>Willian Moura</p>
</a>
<br /> 

## License

Distribuído sob a licença MIT. Veja <a href="https://github.com/willian-moura/awesomemory/blob/main/LICENSE" target="_blank"> MIT </a> para mais informações.

<p align="right">(<a href="#top">Voltar para o topo</a>)</p>
