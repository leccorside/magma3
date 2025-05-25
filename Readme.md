# CadComputercmd - Sistema de Gerenciamento de Computadores

![ExtJS](https://img.shields.io/badge/ExtJS-7.9.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

Sistema completo para gestão de computadores com CRUD, desenvolvido em ExtJS 7.9.0 com integração à API REST.

## 📋 Pré-requisitos

- [Sencha Cmd CLI](https://www.sencha.com/products/extjs/evaluate/)
- [Java JDK 8+](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)
- [Node.js 14.x+](https://nodejs.org/pt/download/)

- OBS: O JAVA USANDO NO PROJETO É O 1.8.0_202 64-Bit (CONFIGURE NA VARIAVEL DE AMBIENTE PARA EVITAR ERROS)

## 🚀 Instalação Local

1. **Baixe e instale sua avaliação de 30 dias do Sencha Cmd CLI:**

   ```bash
   https://www.sencha.com/products/extjs/evaluate/
   ```

2. **Descompacte o arquivo zip baixado, abra a pasta e instale o executável:**

   ```bash
   SenchaCmd-7.9.0.35-windows-64bit.zip
   ```

- [Documentação](https://docs.sencha.com/extjs/7.9.0/guides/getting_started/getting_started_with_zip.html)

3. **Baixe o projeto no Github:**

   ```bash
   git clone https://github.com/leccorside/magma3.git
   ```

4. **Execute este comando fora da pasta do projeto:**

- Ele Criará um novo projeto limpo do Encha Ext JS

  ```bash
  sencha generate app --ext MyApp ./MyApp
  ```

5. **Copie a pasta "ext" de dentro do projeto criado e cole dentro da pasta de seu projeto:**

   ```bash
   MyApp/ext
   ```

6. **Executando o projeto:**

- Dentro do projeto baixado execute:
  ```bash
  sencha app watch
  ```

7. **Acessando o projeto**

   ```bash
   http://localhost:1841
   ```

## 🖥️ Instalação no Servidor

1. **Baixe e instale sua avaliação de 30 dias:**

   ```bash
   https://www.sencha.com/products/extjs/evaluate/
   ```

2. **Descompacte o arquivo zip baixado, abra a pasta e instale o executável:**

   ```bash
   SenchaCmd-7.9.0.35-windows-64bit.zip
   ```

- [Documentação](https://docs.sencha.com/extjs/7.9.0/guides/getting_started/getting_started_with_zip.html)

3. **Baixe o projeto no Github:**

   ```bash
   git clone https://github.com/leccorside/magma3.git
   ```

4. **Execute este comando fora da pasta do projeto:**

- Ele Criará um novo projeto limpo do Encha Ext JS

  ```bash
  sencha generate app --ext MyApp ./MyApp
  ```

5. **Copie a pasta "ext" de dentro do projeto criado e cole dentro da pasta de seu projeto:**

   ```bash
   MyApp/ext
   ```

6. **Dentro da pasta do projeto Gere o build de produção:**

   ```bash
   sencha app build production
   ```

7. **Dentro da pasta do projeto Gere o build de produção:**

- Copie a pasta build/production/NOMEDOPROJETO para seu servidor web
- Configure o virtual host para apontar para esta pasta
