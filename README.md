# Tax Sales Dental Intel Process

Este projeto consiste em um frontend React e um backend ASP.NET Core para calcular impostos sobre vendas com base em itens e estados selecionados.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (geralmente incluído com o Node.js)
- [.NET SDK](https://dotnet.microsoft.com/download) (versão 9.0 ou superior)

## Como rodar o projeto

### Backend

1. Navegue até o diretório do backend:
   ```bash
   cd CalculatorTaxDentalIntel.Api
   ```

2. Restaure as dependências do projeto:
   ```bash
   dotnet restore
   ```

3. Execute o backend:
   ```bash
   dotnet run
   ```

4. O backend estará disponível em `https://localhost:5224` por padrão.

### Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd CalculatorTaxDentalIntel.Web
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Execute o frontend:
   ```bash
   npm start
   ```

4. O frontend estará disponível em `http://localhost:3000` por padrão.

## Como executar os testes

### Backend

1. Navegue até o diretório do backend:
   ```bash
   cd CalculatorTaxDentalIntel.Api
   ```

2. Execute os testes:
   ```bash
   dotnet test
   ```

### Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd CalculatorTaxDentalIntel.Web
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

## Estrutura do Projeto

- **CalculatorTaxDentalIntel.Api**: Contém o código do backend ASP.NET Core.
- **CalculatorTaxDentalIntel.Web**: Contém o código do frontend React.

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.
