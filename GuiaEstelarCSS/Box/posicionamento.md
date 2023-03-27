# Métodos usados para posicionar os elementos na tela:
- Tables (eram os mais antigos layouts usados em html)
- Floats e clear (elementos flutuantes e parar o flutuamento pra não afetar outros elementos)
- Frameworks e Grid Systems (personalizava os elementos)
- Flexbox
- Grid

# Positions
Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.
- Name: position
- Value: static | relative | absolute | fixed
- Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.
- Por padrão os elementos são static. Isso significa que os elementos irão seguir o fluxo normal do HTML.

- Name: position
- Value: static | relative | absolute | fixed

## Relative

- top, right, bottom, left, z-index

## Absolute

Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

HTML

<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
CSS

.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 100px;
  top: 80px
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}

## Fixed

Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

## Element Stacking

É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

HTML

<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>

CSS

.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 3;
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px
}

# Flex

- Nos permite posicionar os elementos dentro da caixa
- Controle em uma dimensão (horizontal ou vertical) uma vez por vez
- Alinhamento, direcionamento, ordenação e tamanho


`por padrão, uma caixa fica do lado da outra, ao aplicar esse    display flex, as caixas ficarão do lado uma da outra` 
div.parent {
	display: flex; 
}

## Flex-direction

* Qual a direção do flex: horizontal ou vertical
row | column

* Alinhamento:
justify-content
align-items

HTML

<div class="container">
  <div class="box blue"></div>
  <div class="box red"></div>
  <div class="box green"></div>
</div>

CSS

`Ao aplicar o flex dentro do body os elementos (div container) estão sendo posicionados dentro da caixa body`
body{
    height: 100vh;              `Aqui coloca o body ocupando toda a viewport`
    margin: 0;                 `Tira as margens para ocupar toda a vp` 

    display: flex;

    align-items: center;        `Centraliza os elementos da caixa`
}

.container {
    width: 100vw;               `Avisa para pegar 100% do que está disponível`
    display: flex;              `Mexe no posicionamento dos filhos`
    justify-content: space-between;
}
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.blue {
  background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

# Grid

- Posicionamento dos elementos dentro da caixa;
- Posicionamento horizontal e vertical ao mesmo tempo;
- Pode ser flexível ou fixo;
- Cria espaços para os elementos filhos habitarem
- O grid é aplicado ao body porque trabalha com o posicionamento dos filhos;

HTML
<body>
    <header>Topo</header>
    <main>Conteúdo</main>
    <aside>Infos adicionais</aside>
    <footer>Rodapé</footer>
</body>

CSS
body {
    margin: 0;
    height: 100vh;

    display: grid;
    grid-template-areas:  `Cada linha das áreas significam as linhas, ou seja, serão três linhas e dentro irá definir as colunas`
    "1 2 ou header header"       
    "1 2 ou main aside"
    "1 2 ou footer footer";

    grid-template-rows: 30px 1lf;
    grid-template-columns: 30px 1lf;
}

`define o grid-area para que acima ele entenda que ocupará duas áreas: header header ou 1 2 `
header {
    grid-area: header; 
    background-color: green
}

main {
    grid-area: main;
    background-color: blue
}

aside {
    grid-area: aside;
    background-color: purple
}

footer {
    grid-area: footer;
    background-color: red
}

