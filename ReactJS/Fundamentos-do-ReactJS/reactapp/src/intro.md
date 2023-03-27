# JSX

* É uma extensão do JavaScript bem semelhante ao HTML. Basicamente ele é uma sintaxe que o ReactJS utiliza para que possamos criar as nossas interfaces de forma declarativa.

* O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags HTML.

* Exemplo de um trecho de código JSX:
App.jsx
    import { useState } from 'react'
    import logo from './logo.svg'
    import './App.css'

        function App() {
        const [count, setCount] = useState(0)

        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                <button type="button" onClick={() => setCount((count) => count + 1)}>
                    count is: {count}
                </button>
                </p>
                <p>
                Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {' | '}
                <a
                    className="App-link"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite Docs
                </a>
                </p>
            </header>
            </div>
        )
        }

        export default App

# Estrutura Pastas e Arquivos

📁 node_modules - A pasta onde ficam todas dependências e módulos do nosso projeto.

📁 src - Pasta principal onde ficará todos os nossos arquivos.

App.css - Arquivo de estilização do App.jsx App.jsx - Página inicial do nosso projeto que será exibida no navegador.

favicon.svg - Ícone de favorito da página. index.css - Arquivo de estilização global logo.svg - Arquivo de imagem da logo do ReactJS. main.jsx - Arquivo responsável por inicializar nossa aplicação.

index.html - Arquivo HTML onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.

.gitignore - Esse arquivo descreve quais arquivos e pasta não devem subir para o Github. package.json - Arquivo responsável pelas dependências do nosso projeto. Contém informações do pacote, como: scripts, dependências, número de versão e etc...

package-lock.json - Parecido com o package.json, esse arquivo descreve as características das dependências do projeto como versão, integridade dos links e muito mais.

vite.config.js - Arquivo de configuração do Vite.

O main inicializa a aplicação e o App.js carrega a interface

# Fragment

Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM, ou seja, vai embrular os elementos.
Exemplo:

function Home() {
  return (
    <>
      <h1>Lista de Presença.</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
  );
}

export default Home;

No exemplo acima, poderia ser utilizado uma <div> para agrupar esses três elementos.

# Importanto o CSS

Importando arquivos no CSS
A importação de um arquivo global deverá ser realizada no arquivo main.jsx
global.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main.jsx
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

// Arquivo de estilização global
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);


# State

O Hook useState permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).

Usamos os estados porque uma variável comum não reflete novos valores em nossa interface.

# Imutabilidade 

O conteúdo da variável não deve ser modificado e sim substituído. Faz parte do paradigma da programação funcional, sendo mais performático.

# KeyProp

Em uma listagem, normalmente utilizamos o map() do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade key para que esse dado nunca se repita e evitar que erros desse tipo aconteçam. A chave key é orientada também por questões de performance, por exemplo, ao atualizar uma propriedade específica.

# Hooks

São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

* Exemplo: 
O useEffect é executado automaticamente sempre que o componente é renderizado.

A estrutura do useEffect é da seguinte forma:

useEffect(() => {
 // Dentro do objeto devemos colocar todas as ações que serão executadas.
    

// Os arrays definem quais os estados que o useEffect depende.
  }, []);