<div align="center">

# Prometeu

### Recursos digitais gratuitos organizados para facilitar o acesso ao conhecimento.

[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-informational)](./LICENSE)

**Aplicação:** [prometeu-nicolinux.vercel.app](https://prometeu-nicolinux.vercel.app/)

</div>

## Visão geral

O **Prometeu** é uma plataforma de curadoria que reúne ferramentas, cursos e outros recursos gratuitos disponíveis na internet. A proposta é reduzir o esforço de encontrar materiais úteis, apresentando opções organizadas por categoria, nível e idioma.

O projeto tem como foco a inclusão digital e o acesso a oportunidades de aprendizagem, desenvolvimento profissional e produtividade.

## Categorias do catálogo

O catálogo organiza recursos nas seguintes áreas:

- Cursos
- Certificados
- Trabalho e carreira
- Organização pessoal
- Programação
- Idiomas
- Design
- Escritório
- Computação em nuvem
- Inteligência artificial

Os registros do catálogo incluem informações como descrição, tipo de recurso, nível, idioma, indicação de certificado, categorias e endereço de acesso.

## Funcionalidades

- **Catálogo de recursos:** apresentação de ferramentas e plataformas cadastradas no projeto.
- **Navegação por categorias:** organização dos recursos em áreas de interesse.
- **Informações dos recursos:** descrição, nível recomendado, idioma e indicação de certificado.
- **Orientação inicial:** seções que ajudam o visitante a entender como começar.
- **Apresentação de impacto e propósito:** contextualização da proposta de inclusão digital.

A indicação de certificado representa a informação cadastrada para cada recurso; condições, disponibilidade e eventuais cobranças devem ser conferidas diretamente na plataforma de origem.

## Tecnologias

- **React 19** — interface baseada em componentes.
- **TypeScript** — tipagem estática.
- **TanStack Start e TanStack Router** — estrutura da aplicação e roteamento.
- **Vite** — ambiente de desenvolvimento e build.
- **Nitro** — camada de execução utilizada pelo projeto.
- **Tailwind CSS** — estilização.
- **Radix UI** — componentes acessíveis de interface.
- **Lucide React** — ícones.

## Executar localmente

### Requisitos

- Node.js
- npm

### Instalação

~~~bash
git clone https://github.com/0xNicolinux/Prometeu.git
cd Prometeu
npm install
~~~

### Desenvolvimento

~~~bash
npm run dev
~~~

### Build e pré-visualização

~~~bash
npm run build
npm run preview
~~~

### Qualidade de código

~~~bash
npm run lint
npm run format
~~~

## Organização do catálogo

Os dados dos recursos e as categorias são definidos em `src/data/tools.ts`. Esse arquivo contém os tipos utilizados para descrever cada item, incluindo nome, descrição, nível, idioma, indicação de certificado, categorias e URL.

## Contribuição

Contribuições podem ser propostas por meio de fork e pull request:

1. Crie um fork do repositório.
2. Crie uma branch para sua alteração.
3. Faça as alterações e valide o projeto localmente.
4. Abra um pull request com uma descrição objetiva.

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).