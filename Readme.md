# CadComputercmd - Sistema de Gerenciamento de Computadores

![ExtJS](https://img.shields.io/badge/ExtJS-7.9.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

Sistema completo para gestão de computadores com CRUD, desenvolvido em ExtJS 7.9.0 com integração à API REST.

## 📋 Pré-requisitos

- [Sencha Cmd CLI](https://www.sencha.com/products/extjs/evaluate/)
- [Java JDK 8+](https://www.java.com/pt-BR/download/)
- [Node.js 14.x+](https://nodejs.org/pt/download/)

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

4. **Dentro do projeto baixado execute o comando para instalar as bibliotecas::**

```bash
sencha app install --framework=/path/to/extjs/
```

5. **Executando o projeto:**

- Dentro do projeto baixado execute:
  ```bash
  sencha app watch
  ```

6. **Acessando o projeto**

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

4. **Dentro do projeto baixado execute o comando para instalar as bibliotecas::**

```bash
sencha app install --framework=/path/to/extjs/
```

5. **Dentro da pasta do projeto Gere o build de produção:**

   ```bash
   sencha app build production
   ```

- Copie a pasta build/production/NOMEDOPROJETO para seu servidor web
- Configure o virtual host para apontar para esta pasta
