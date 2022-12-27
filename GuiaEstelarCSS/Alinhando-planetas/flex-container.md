# Propriedades do flex cointainer

* Direção dos itens
* Multi linhas
* Alinhamento
    * Principal
    * Cruzado
* Espaços entre os itens


# Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com o `flex-direction` com os valores row, row-reverse, column, column-reverse. Por padrão, o flex é row

Exemplo:

<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

.container{
  display: flex;
  flex-direction: column-reverse;
  height: 80vh; # Usa o height porque por padrão o column ocupa o tamanho do conteúdo
}

# Flex wrap

- Multi linhas
- Cada nova linha, um novo flex container

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>

.box {
  display: flex;
  flex-wrap: wrap-reverse; # o wrap vai criar outro eixo (linha) conforme a adaptação da tela. neste caso, o reverse vai trocar os elementos.
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  
  width: 80px;
}

# Flex-flow

- Shorthand
- Flex-direction e flex-wrap

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>

.box {
  display: flex;
  flex-flow: column wrap; # Pode-se usar mais de uma propriedade com o flex-flow, por exemplo, colocar row wrap, column wrap etc
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  width: 80px;
}

# Justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

## Valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>

.box {
  display: flex;
  justify-content: space-around;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  width: 80px;
}

* SE MUDAR A DIREÇÃO PARA COLUMN, TODOS OS EIXOS TERÃO COMPORTAMENTOS ADAPTADOS A FORMATO DE COLUNA (O PADRÃO É ROW):

.box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px dashed red;
  height: 150px;
}

.box div {
  border: 1px solid;
  width: 80px;
}


# Align-items

- Alinhamento dos elementos no eixo cruzado

## Valores

- stretch
- flex-start
- flex-end
- center

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>

.box {
  display: flex;
  align-items: stretch; # o padrão do align-items é o stretch (esticar)
  border: 1px dashed red;
  height: 150px;
}

.box div {
  border: 1px solid;
  width: 80px;
}

LEMBRANDO QUE SE MUDAR O FLEX DIRECTION PARA COLUMN, A DIREÇÃO DOS ITENS TAMBÉM MUDARÃO:

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed red;
  height: 150px;
}

.box div {
  border: 1px solid;
  width: 80px;
}

# Gap (espaços entre os elementos)

## Valores

- Unidades de medida:
    - fixas: px, pt
    - flexíveis: %, em, rem

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>

.box {
  display: flex;
  /*flex-direction: column;*/
  border: 1px dashed red;
  gap: 2px;
  height: 100px;
}

.box div {
  border: 1px solid;
  width: 80px;
}

O GAP SEMPRE DEIXARÁ UM ESPAÇO NO FINAL, PORQUE O QUE IMPORTA É O QUE ESTÁ ENTRE OS ELEMENTOS
