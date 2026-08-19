# 🛒 Average Store — Mercado React Native

Aplicativo mobile de gerenciamento e compras desenvolvido com **React Native e Expo** como projeto de estudos.

O projeto simula a experiência de um pequeno mercado, permitindo navegar pelas diferentes áreas do aplicativo, visualizar produtos e utilizar uma interface desenvolvida para dispositivos móveis.

> 📚 Projeto desenvolvido em parceria com um colega de estudos com o objetivo de praticar desenvolvimento mobile utilizando React Native e Expo.

---

## 📱 Sobre o projeto

O **Average Store** foi desenvolvido utilizando o ecossistema **React Native + Expo**, explorando conceitos de desenvolvimento de aplicações mobile, navegação entre telas, componentes reutilizáveis e gerenciamento de estado.

A aplicação possui uma tela inicial personalizada com Splash Screen e navegação para as principais áreas do aplicativo.

O projeto foi originalmente desenvolvido utilizando o **Expo Snack/Expo**, permitindo testar e visualizar a aplicação rapidamente em dispositivos móveis.

---

## ✨ Funcionalidades

* 🏪 Interface de mercado
* 📱 Aplicação desenvolvida para dispositivos móveis
* 🚀 Splash Screen personalizada
* 🧭 Navegação entre telas
* 🧩 Componentização utilizando React Native
* 🎨 Interface utilizando React Native Paper
* 💾 Armazenamento local com AsyncStorage
* 📂 Organização das telas através de rotas
* 📐 Componentes e estilos separados por responsabilidade

---

## 🖼️ Demonstração

> 📸 *Adicione aqui screenshots da aplicação.*

Sugestão de organização:

|  Tela inicial |    Produtos   |   Navegação   |
| :-----------: | :-----------: | :-----------: |
| 📱 Screenshot | 📱 Screenshot | 📱 Screenshot |

Para adicionar imagens ao README, coloque os arquivos dentro da pasta `assets` e utilize:

```markdown
![Tela inicial](./assets/screenshots/home.png)
```

---

## 🛠️ Tecnologias

### Front-end / Mobile

| Tecnologia            | Utilização                   |
| --------------------- | ---------------------------- |
| ⚛️ React              | Desenvolvimento da interface |
| 📱 React Native       | Desenvolvimento mobile       |
| 🚀 Expo               | Ambiente de desenvolvimento  |
| 🧭 React Navigation   | Navegação entre telas        |
| 🎨 React Native Paper | Componentes de interface     |
| 💾 AsyncStorage       | Persistência de dados local  |
| ✨ Reanimated          | Animações                    |
| 👆 Gesture Handler    | Gestos e interações          |

O projeto utiliza atualmente **Expo 51**, **React 18.2** e **React Native 0.74.2**.

---

## 📂 Estrutura do projeto

```text
Mercado_React/
│
├── 📁 assets/
│   └── Imagens e recursos visuais
│
├── 📁 components/
│   ├── Componentes reutilizáveis
│   └── Estilos
│
├── 📁 routes/
│   └── Configuração da navegação
│
├── 📄 App.js
├── 📄 app.json
├── 📄 babel.config.js
├── 📄 package.json
├── 📄 package-lock.json
└── 📄 README.md
```

A estrutura atual do repositório possui, entre outros, os diretórios `assets`, `components` e `routes`, além do `App.js` e arquivos de configuração do Expo.

---

## 🚀 Como executar

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/)
* npm
* Expo
* Expo Go no celular, caso queira executar fisicamente no dispositivo

---

### 1. Clone o repositório

```bash
git clone https://github.com/NicolasPontes/Mercado_React.git
```

Entre na pasta:

```bash
cd Mercado_React
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Inicie o projeto

```bash
npm start
```

O comando inicia o servidor de desenvolvimento do Expo. O `package.json` também disponibiliza comandos específicos para Android, iOS e Web.

---

## 📱 Executando no celular

Depois de executar:

```bash
npm start
```

o Expo exibirá um **QR Code** no terminal ou na interface do Expo.

Com o aplicativo **Expo Go** instalado no celular:

1. Conecte o computador e o celular à mesma rede.
2. Abra o Expo Go.
3. Escaneie o QR Code.
4. Aguarde o carregamento da aplicação.

Também é possível utilizar um emulador Android ou iOS, dependendo do ambiente configurado.

---

## 💻 Outros comandos

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Web

```bash
npm run web
```

Esses scripts estão definidos diretamente no `package.json` do projeto.

---

## 🧭 Arquitetura da aplicação

O fluxo principal da aplicação começa pelo `App.js`.

```text
                  ┌───────────────┐
                  │    App.js     │
                  └───────┬───────┘
                          │
                          ▼
                ┌──────────────────┐
                │   Splash Screen  │
                └────────┬─────────┘
                         │
                    Entrar
                         │
                         ▼
                ┌──────────────────┐
                │     Routes       │
                └────────┬─────────┘
                         │
            ┌────────────┼────────────┐
            ▼            ▼            ▼
       ┌─────────┐  ┌─────────┐  ┌─────────┐
       │  Home   │  │ Produtos│  │  Outras │
       │         │  │         │  │  telas  │
       └─────────┘  └─────────┘  └─────────┘
```

O `App.js` é responsável pela inicialização da aplicação, gerenciamento da Splash Screen e direcionamento para o sistema de rotas.

---

## 🎨 Splash Screen

Uma das características da aplicação é a utilização de uma Splash Screen personalizada.

Durante a inicialização:

1. A aplicação impede o fechamento automático da Splash Screen.
2. Exibe a identidade visual do mercado.
3. Aguarda alguns segundos.
4. Exibe a opção **Entrar**.
5. Após a interação, o usuário é direcionado para as rotas principais.

Essa lógica está implementada no `App.js` utilizando `expo-splash-screen` e estados do React.

---

## 📚 Objetivos de aprendizado

O projeto foi desenvolvido principalmente para colocar em prática conceitos de desenvolvimento mobile.

Entre os principais conhecimentos trabalhados estão:

* Componentização com React
* Desenvolvimento mobile com React Native
* Hooks (`useState` e `useEffect`)
* Navegação entre telas
* Organização de componentes
* Estilização
* Gerenciamento de estados
* Persistência de dados
* Utilização do Expo
* Desenvolvimento e testes em dispositivos móveis

---

## 🔮 Melhorias futuras

O projeto ainda possui espaço para evolução.

Algumas ideias:

* [ ] Implementar sistema completo de carrinho
* [ ] Implementar busca de produtos
* [ ] Adicionar categorias
* [ ] Implementar autenticação de usuários
* [ ] Criar sistema de checkout
* [ ] Adicionar integração com API
* [ ] Implementar banco de dados
* [ ] Melhorar responsividade
* [ ] Adicionar animações nas transições
* [ ] Melhorar acessibilidade
* [ ] Criar testes automatizados
* [ ] Adicionar sistema de favoritos
* [ ] Implementar histórico de compras

---

## 👥 Desenvolvimento

Projeto desenvolvido em parceria durante os estudos de desenvolvimento de sistemas.

O objetivo principal foi transformar conhecimentos teóricos de **React Native** em uma aplicação mobile funcional, explorando desde a construção da interface até a navegação e organização do projeto.

---

## 👨‍💻 Autores

**Nicolas de Pontes**

🔗 GitHub: [@NicolasPontes](https://github.com/NicolasPontes)

**Colaborador**

> Adicione aqui o nome e GitHub do seu colega de desenvolvimento.

---

## 📄 Licença

Este projeto foi desenvolvido para fins **educacionais e de estudo**.

---

<div align="center">

### 🛒 Average Store

Desenvolvido com React Native ⚛️ + Expo 🚀

**Obrigado por visitar o projeto! ⭐**

</div>
