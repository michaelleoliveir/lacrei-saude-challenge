# Projeto Lacrei Saúde

Desafio para Voluntariado Front End na Lacrei Saúde.


## Sumário

Este repositório apresenta a criação de páginas web interativas, desenvolvidas com ênfase na experiência do usuário e alinhadas ao guia de estilo da Lacrei Saúde. O projeto foi desenvolvido utilizando TypeScript, Next.js e Tailwind, juntamente com o Jest, para a realização de testes unitários.

## Tecnologias Utilizadas

- **Framework**: Next.js.
- **Linguagem**: TypeScript.
- **Estilização**: Tailwind e Styled-Components.
- **Testes**: Jest e React Testing Library.

## Funcionalidades implementadas

### 1. Header e Footer Personalizados

O design do Header e do Footer reflete a essência acolhedora e profissional da Lacrei Saúde, alinhando-se perfeitamente com o estilo visual da marca. Ambos os componentes são reutilizáveis e otimizados para diferentes resoluções de tela e também compartilhados por toda a aplicação, sem necessidade de re-renderização de informações estáticas.

### 2. Roteamento Entre Páginas

As páginas foram integradas com um sistema de roteamento fluido e eficiente, permitindo a navegação dinâmica e sem interrupções, podendo acessá-las pelos botões no Header. Ao clicar na logo da Lacrei Saúde, é redirecionado para a página inicial (Home).

#### Páginas

- Home (/)
- Quem Somos (/quem-somos)
- Ajuda (/ajuda)

### 3. Botões Interativos

Há três botões com funcionalidades exclusivas:

- Botão no header para alternar entre as páginas web da aplicação (`Quem Somos` e `Ajuda`)
- Botão no header que mostra as opções de login (`Entrar`), seja o usuário um Paciente ou um Profissional.
- Botão no footer que, ao clicar, leva o usuário ao topo da página.


## Demonstração

### Versão Desktop

- Página "Entre em Contato"
![Demonstração das páginas web interativas para Lacrei Saúde versão desktop](https://i.postimg.cc/vBQWNzSt/Captura-de-tela-2025-03-12-220632.png)

- Página "Quem somos"
![Demonstração das páginas web interativas para Lacrei Saúde versão desktop](https://i.postimg.cc/vZFxKh4x/Captura-de-tela-2025-03-12-220714.png)

### Versão Mobile

- Página "Entre em Contato"
![Demonstração das páginas web interativas para Lacrei Saúde versão mobile](https://i.postimg.cc/j2fPWFWK/Captura-de-tela-2025-03-12-221048.png)

- Página "Quem somos"
![Demonstração das páginas web interativas para Lacrei Saúde versão mobile](https://i.postimg.cc/CLt9pB0q/Captura-de-tela-2025-03-12-221153.png)

## Como Iniciar

### Instalação

1. Clone o repositório

```bash
git clone https://github.com/michaelleoliveir/lacrei-saude-challenge
```

2. Instale as dependências

```bash
npm install
```

3. Inicie o servidor

- ```bash
    npm start
  ```

4. Acesse [http://localhost:3000](http://localhost:3000) com seu navegador.

- ```bash
   npm run dev
  ```

## Testes Unitários

Para executar os testes unitários dos componentes:

```bash
    npm run test
```

![Teste Unitário](https://i.postimg.cc/9fb9Z2gW/Captura-de-tela-2025-03-12-220409.png)
## Badges

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)