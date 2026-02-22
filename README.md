# Exercícios — TypeScript, Node.js e CLI

Este projeto contém exercícios práticos para introdução ao **TypeScript**, execução com **Node.js**, organização de projetos no **VSCode** e desenvolvimento de scripts executados via linha de comando.

---

## 📋 Descrição

O objetivo destes exercícios é praticar:

* Configuração de ambiente TypeScript
* Organização de projetos em múltiplas pastas
* Manipulação de arrays com funções utilitárias
* Uso de módulos e importações
* Execução de scripts via terminal
* Criação de logs personalizados
* Consumo de API externa (PokéAPI)
* Uso de argumentos de linha de comando (`process.argv`)

---

## 🗂️ Estrutura do Projeto

```
exercicios-typescript/
├── exercicio1/
│   ├── arrayUtils.ts
│   ├── test.ts
│   └── tsconfig.json
│
├── exercicio2/
│   ├── arrayUtils.ts
│   ├── test.ts
│   └── tsconfig.json
│
├── exercicio3/
│   ├── pokedex.ts
│   └── tsconfig.json
│
├── exercicio4/
│   ├── logger.ts
│   ├── app.ts
│   └── tsconfig.json
│
├── exercicio5/
│   ├── api.ts
│   ├── app.ts
│   └── tsconfig.json
│
└── README.md
```

Cada exercício possui sua própria configuração e pode ser executado de forma independente.

---

# 🎯 Objetivos dos Exercícios

---

## 🧩 Exercício 1 — Funções Utilitárias de Array

### 🎯 Objetivo

Implementar funções utilitárias para manipulação de arrays em TypeScript.

### 📚 Conceitos abordados

* Generics (`<T>`)
* Funções reutilizáveis
* Manipulação de arrays
* Exportação e importação de módulos

### 🛠 Implementação

Funções criadas em `arrayUtils.ts`:

* `unique` → remove valores duplicados
* `groupBy` → agrupa itens por chave
* `sumBy` → soma valores por propriedade

### ▶️ Como executar

```bash
cd exercicio1
npx ts-node test.ts
```

---

## 🧩 Exercício 2 — Organização Modular e Tipagem

### 🎯 Objetivo

Utilizar módulos TypeScript com tipagem correta e organização modular.

### 📚 Conceitos abordados

* Importação entre arquivos
* Configuração do `tsconfig.json`
* Resolução de módulos
* Correção de erros comuns do TypeScript

### ▶️ Como executar

```bash
cd exercicio2
npx ts-node test.ts
```

---

## 🧩 Exercício 3 — Pokédex via Linha de Comando

### 🎯 Objetivo

Criar um script que busca informações de um Pokémon usando a PokéAPI.

### 📚 Conceitos abordados

* `process.argv`
* Consumo de API com `fetch`
* Async/Await
* Tratamento de erros
* Tipos do Node (`@types/node`)

### 🛠 Implementação

Arquivo: `pokedex.ts`

O script:

1. Recebe o nome do Pokémon pelo terminal
2. Consulta a PokéAPI
3. Exibe dados formatados

### ▶️ Como executar

```bash
cd exercicio3
npx ts-node pokedex.ts pikachu
```

### 📌 Exemplo de saída

```
📦 Pokémon: PIKACHU
📏 Altura: 0.4 m
⚖️ Peso: 6 kg
🔥 Tipo(s): electric
```

---

## 🧩 Exercício 4 — Sistema de Logger

### 🎯 Objetivo

Criar uma classe de logging reutilizável para diferentes módulos da aplicação.

### 📚 Conceitos abordados

* Classes em TypeScript
* Encapsulamento
* Reutilização de código
* Boas práticas de logging

### 🛠 Implementação

Arquivo: `logger.ts`

A classe `Logger` permite:

* `info()` → mensagens informativas
* `warn()` → avisos
* `error()` → erros

Arquivo: `app.ts` demonstra o uso em diferentes módulos.

### ▶️ Como executar

```bash
cd exercicio4
npx ts-node app.ts
```

### 📌 Exemplo de saída

```
[INFO] [UserModule] Usuário criado com sucesso
[WARN] [PaymentModule] Pagamento em atraso
[ERROR] [PaymentModule] Falha ao processar pagamento
```

---

## 🧩 Exercício 5 — Consumo de API com CLI

### 🎯 Objetivo

Criar um script que consulta uma API externa e exibe os dados no terminal.

### 📚 Conceitos abordados

* Organização em módulos (`api.ts` e `app.ts`)
* Requisições HTTP com `fetch`
* Async/Await
* Uso de argumentos CLI
* Separação de responsabilidades

### 🛠 Implementação

* `api.ts` → responsável por consultar a API
* `app.ts` → interface CLI que recebe o nome do Pokémon

### ▶️ Como executar

```bash
cd exercicio5
npx ts-node app.ts pikachu
```

---

# 🛠 Tecnologias Utilizadas

* Node.js 18+
* TypeScript
* ts-node
* PokéAPI
* VSCode

---

# 🚀 Como Executar o Projeto

## ✅ Pré-requisitos

* Node.js instalado
* VSCode
* npm

---

## 🔧 Instalar dependências (quando necessário)

```bash
npm install
```

Para exercícios que usam tipos do Node:

```bash
npm install --save-dev @types/node
```

---

## ▶️ Executar os exercícios

### Exercício 1

```bash
cd exercicio1
npx ts-node test.ts
```

### Exercício 2

```bash
cd exercicio2
npx ts-node test.ts
```

### Exercício 3

```bash
cd exercicio3
npx ts-node pokedex.ts pikachu
```

### Exercício 4

```bash
cd exercicio4
npx ts-node app.ts
```

### Exercício 5

```bash
cd exercicio5
npx ts-node app.ts pikachu
```

---

# 🧠 Conceitos Aprendidos

## 📦 TypeScript

* Tipagem estática
* Generics
* Classes e módulos
* Configuração do compilador (`tsconfig.json`)

## 🧩 Módulos

* `export` e `import`
* Organização em múltiplos arquivos
* Separação de responsabilidades

## ⚙️ Node.js + CLI

* `process.argv`
* Scripts executados via terminal
* Tipos do Node (`@types/node`)

## 🌐 Consumo de API

* Requisições HTTP com `fetch`
* Async/Aait
* Tratamento de erros
* Integração com APIs externas

---

## 👤 Autor

**Beatriz Mazzucatto Seabra**

---

**Instituto Federal de Educação, Ciência e Tecnologia de São Paulo — Câmpus Guarulhos**
**Desenvolvimento para Dispositivos Móveis — Prof. Douglas Andrade de Paula**
