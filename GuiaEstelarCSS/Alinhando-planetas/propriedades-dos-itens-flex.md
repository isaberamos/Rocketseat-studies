# Propriedades para os itens do flex

- flex-basis
- flex-grow
- flex-shrink
- flex
- order

# Flex basis

Ele ajusta o tamanho do conteúdo

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>

.box {
  display: flex;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  flex-basis: auto;
}

.box div:nth-child(1) {
  width: 25px; # Aqui será ajustado porque o flex-basis está auto, do contrário, se o flex-basis estivesse 15px, por exemplo, o width não iria ser apicado porque o basis está tomando conta da propriedade
}


* REPARE QUE TUDO MUDA AO TROCAR O FLEX-DIRECTION PARA COLUMN (SEMPRE PARTIRÁ DO EIXO PRINCIPAL)
.box {
  display: flex;
  flex-direction: column;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  flex-basis: auto;
}

.box div:nth-child(1) {
  width: 25px;
  height: 50px; # SE TIRAR O FLEX-BASIS DO AUTO, NÃO SERIA POSSÍVEL APLICAR O HEIGHT
}

* OU PODERIA SIMPLESMENTE USAR ASSIM:

.box div {
  border: 1px solid;
}

.box div:nth-child(1) {
  flex-basis: 25px;
}

# Flex-grow

- O crescimento do item dentro do container em relação aos espaços vazios

Exemplo:

.box {
  display: flex;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  flex-basis: auto;
}

.box div:nth-child(3),
.box div:nth-child(2){
  flex-grow: 1;
}

.box div:nth-child(1){
  flex-grow: 2;
}

O valor do flex-grow é a quantidade de "frações" ocupadas

* Repare que se mudar o flex-direction para column, fica ainda mais visível essa modificação:

.box {
  display: flex;
  flex-direction: column;
  border: 1px dashed red;
  height: 150px;
}

.box div {
  border: 1px solid;
  flex-basis: auto;
}

.box div:nth-child(3),
.box div:nth-child(2){
  flex-grow: 1;
}

.box div:nth-child(1){
  flex-grow: 2;
}


# Flex-shrink

- Encolhimento de elementos dentro do container

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>

.box {
  display: flex;
  border: 1px dashed red;
  width: 160px; 
}

.box div {
  border: 1px solid;
  flex-basis: 45%;
}

.box div:nth-child(2),
.box div:nth-child(3) {
  flex-shrink: 2;  # 1 é o padrão de todos e 0.2, por exemplo, estenderá os elementos
}

* Experimente usar com flex-direction: column

# Shorthand flex

Exemplo:

.box {
  display: flex;
  border: 1px dashed red;
}

.box div {
  border: 1px solid;
  flex: 1 0 40px;
}

A primeira propriedade é o grow, a segunda é shrink (ou poderia ser o basis se tivesse uma unidade de medida) e a terceira é basis

# Aplicação das propriedades do flex

O basis é o que da mais força para determinar o tamanho das caixas

Exemplo:

<div class="page">
  <aside>Aside</aside>
    <main>
      Main
      <section>Content 1</section>
    <section>Content 2</section>
    <section>Content 3</section>
    </main>
</div>

.page {
  border: 2px solid;
  min-height: 100vh;
  
  display: flex;
}

aside {
  background: lightgreen;
  flex: 1;
}

main {
  background: lightblue;
  flex: 2;
  display: flex;
  flex-direction: column;
}

main section:nth-child(1) {
  background: purple;
  flex: 2;
}

main section:nth-child(2) {
  background: orange;
  flex: 0 80px;
}

main section:nth-child(3) {
  background: red;
  flex: 0 0;
}
 
# Order

É a propriedade que ordena elementos dentro de uma caixa

Exemplo:

<div class="box">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>


.box {
  display: flex;
  border: 1px dashed red;
}

.box div:nth-child(1) {
  order: 1;
}

.box div:nth-child(2) {
  order: 0;
}

.box div:nth-child(3) {
  order: 0;
}

.box div:nth-child(4) {
  order: -1;
}
