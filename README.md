# Portfólio de Bruna Marcelle

Este é um projeto de portfólio desenvolvido com **React**, **Ant Design** e **TypeScript**. O objetivo deste projeto é apresentar informações profissionais, projetos e habilidades de forma visualmente atraente e responsiva.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar o Projeto Localmente](#como-executar-o-projeto-localmente)
- [Personalizações Futuras](#personalizações-futuras)

---

## Visão Geral

O portfólio foi projetado para ser uma vitrine profissional moderna e interativa. Ele inclui seções como:

- **Sobre Mim**: Uma breve introdução sobre Bruna Marcelle.
- **Projetos**: Um carrossel estático com cards que exibem projetos pessoais.
- **Experiências Profissionais**: Lista de experiências profissionais com descrições detalhadas.
- **Tecnologias**: Ícones das tecnologias dominadas por Bruna Marcelle.
- **Contato**: Informações de contato, incluindo e-mail e LinkedIn.

---

## Funcionalidades Principais

1. **Design Responsivo**:

   - O layout é totalmente responsivo e funciona bem em dispositivos móveis, tablets e desktops.
2. **Carrossel de Projetos**:

   - Os projetos são exibidos em um carrossel estático com setas personalizadas para navegação.
3. **Ícones Interativos**:

   - Ícones de tecnologias e links (como LinkedIn) são clicáveis e estilizados para melhor usabilidade.
4. **Animações Suaves**:

   - Transições suaves foram adicionadas aos botões e elementos interativos para melhorar a experiência do usuário.
5. **Fundo Dinâmico**:

   - O fundo da página possui um gradiente roxo e preto, criando um visual moderno e profissional.

---

## Tecnologias Utilizadas

- **React**: Framework principal para construção da interface.
- **TypeScript**: Adiciona tipagem estática ao projeto, melhorando a manutenibilidade.
- **Ant Design**: Biblioteca de componentes UI para estilização e funcionalidades prontas.
- **CSS-in-JS**: Estilização inline usando objetos JavaScript para maior controle.
- **HTML5 e CSS3**: Para estrutura e estilização básica.
- **Yarn**: Gerenciador de pacotes utilizado no projeto.

---

## Estrutura do Projeto

Aqui está a organização dos arquivos e pastas:

```md
portfolio/
├── public/ # Arquivos públicos (imagens, ícones, etc.)
│ ├── assets/ # Imagens e ícones utilizados no projeto
│ └── index.html # Página HTML principal
├── src/ # Código-fonte do projeto
│ ├── components/ # Componentes reutilizáveis
│ │ ├── AboutMe.tsx # Seção "Sobre Mim"
│ │ ├── Contact.tsx # Seção "Contato"
│ │ ├── Experience.tsx # Seção "Experiências Profissionais"
│ │ ├── Header.tsx # Barra de navegação
│ │ ├── Projects.tsx # Seção "Projetos"
│ │ └── Technologies.tsx # Seção "Tecnologias"
│ ├── App.tsx # Componente principal que une todas as seções
│ ├── index.css # Estilos globais
│ └── index.tsx # Ponto de entrada do aplicativo
├── package.json # Dependências e scripts do projeto
└── README.md # Este arquivo
```

---

## Como executar o projeto localmente

### Pré-requisitos

Node.js: Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).

Yarn: Instale o Yarn globalmente usando o comando:

```bash
  npm install -g yarn
```

### Passos para Executar

Clone o repositório:

1. ```bash
   git clone https://github.com/seu-usuario/portfolio.git

   cd portfolio
   ```
2. Instale as dependências:

   ```bash
   yarn install
   ```
3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn start
   ```
4. Acesse o projeto no navegador:

   ```bash
   http://localhost:3000
   ```

## Personalizações Futuras

#### **Dark Mode**

* Implementar um botão para alternar entre modos claro e escuro.

#### **Formulário de Contato**

* Substituir o link de e-mail por um formulário funcional com integração de backend.

## Link do projeto no Vercel: [Bruna Marcelle](https://portifolio-brubs.vercel.app/)
