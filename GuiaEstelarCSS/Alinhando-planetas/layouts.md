# Layouts

É a forma em que os elementos estão distribuídos na tela


## Normal flow

ou Flow layout é a maneira que os elementos `block`e `inline` ficam na página. Block quebra as linhas, ou seja, blocos, e inline mantém o elemento do lado, exemplo a tag <span>


## Table

<table>
    <tr>
        <td> Hora<td>
        <td> 20:30<td>
    </tr>
</table>


## Tableless

Propriedades `float`e `clear` para que os elementos possam mudar de posição na tela.

<div style="float:left">esquerda</div>
<div>direita</div>

resultado:
esquerdadireita


# Flexbox

Os elementos internos são melhores devido a mais alinhamento, ordenação e tamanhos flexíveis

HTML
<div class="flexbox">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

CSS
.flexbox {
    display: flex;
    flex-direction: column; 
}

.item:nth-child(1) {
    order: 1;
}


# Terminologia

- Flex Container
    - Flex Item
- Nesting
- Axis (eixo)
    - main (principal)
        - start, end
    - cross (cruzado)
        - start, end
- Flex sizing (flex)
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container:

    Exemplo:

    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>

    .container {
        display: flex;
        border: 1px solid red;
        height: 80vh;
    }

    .item {
        background-color: gray;
        border: 1px solid;
        flex: 1;
    }

