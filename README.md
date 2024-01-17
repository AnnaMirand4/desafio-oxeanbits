# Desafio OxeanBits - Aplicação React com KendoReact

Este repositório contém uma aplicação React desenvolvida para atender ao desafio proposto pela OxeanBits. A aplicação utiliza o framework de UI KendoReact para exibir uma tabela de comentários obtidos da API JSONPlaceholder.


## Pré-requisitos:
Antes de executar a aplicação, certifique-se de ter os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/)
- npm (Node Package Manager): geralmente é instalado automaticamente com o Node.js

 
  
## Configuração do Projeto

1. Clone este repositório:
  ```sh bash
  git clone https://github.com/AnnaMirand4/desafio-oxeanbits.git
  cd desafio-oxeanbits
  ``` 
2. Instale as dependências do projeto:
  ```sh
  npm install
  ```
3. Instale o Axios para realizar chamadas à API:
  ```sh
  npm install axios
  ```
4. Instale o KendoReact para utilizar os componentes de tabela:
  ```sh
  npm install --save @progress/kendo-react-grid
  ```
5. Para começar a usar um tema, instale seu pacote através do NPM. Por exemplo, para instalar o tema Padrão, execute o seguinte comando:
  ```sh
  npm install --save @progress/kendo-theme-default
  ``` 

## Obtenha a licença do KendoReact e ative-a:

Siga as instruções na documentação da Telerik KendoReact para obter a licença.
Cole o arquivo de licença (geralmente em formato .txt) na pasta raiz da aplicação.
- Site para começar uma lincença, [aqui](https://www.telerik.com/kendo-react-ui) 
- Instruções para ativação, [aqui](https://www.telerik.com/kendo-react-ui/components/my-license/)


## Executando a Aplicação

Após configurar o projeto, você pode executar a aplicação com o seguinte comando:

  ```sh
  npm start
  ```
Isso iniciará a aplicação em modo de desenvolvimento e abrirá automaticamente uma nova guia no seu navegador padrão.



## Configuração da Licença KendoReact
Certifique-se de que a licença do KendoReact está ativa antes de utilizar os componentes na aplicação. Você pode seguir as instruções fornecidas na documentação da Telerik [KendoReact](https://www.telerik.com/kendo-react-ui) para ativar a licença.



## Executando Testes
Os testes unitários podem ser executados usando o seguinte comando:
  ```sh
  npm test
  ```
Este comando iniciará o executor de testes no modo de observação interativa. Consulte a documentação do [Jest](https://jestjs.io/pt-BR/docs/tutorial-react) para obter mais informações sobre como escrever e executar testes em React: Documentação do [Jest para React](https://jestjs.io/pt-BR/docs/tutorial-react).
