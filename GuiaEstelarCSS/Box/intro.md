# Box Model

* Cada elemento é representado como uma caixa retangular
* Essa caixa possui propriedades de uma caixa em 2 dimensões (largura x altura)

## Propriedades da caixa

* Tamanho (largura x altura) → width | height
* Conteúdo → content
* Bordas → border
* Preenchimento interno → padding
* Espaços fora da caixa → margin


# Box sizing

O cálculo do tamanho total da caixa é feito pelo content-box (é contado do conteúdo)
Já o border-box faz o cálculo da caixa

## Exemplos

<div class="div">
    CSS É TOPPPP
</div>

div {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 10%;
    padding: 0 20px; `o primeiro parâmetro é para em cima e em baixo e o segundo parâmetro é para as laterais`
}


# Display block-inline

* Display é a apresentação da caixa
* Como as caixas se comportam em relação às outras caixas
* Comportamento externo das caixas, exemplo: se uma caixa está do lado ou em cima da outra
* A maioria são block, enquanto outras são inline

`display-block`vai ocupar toda a linha colocando o próximo elemento abaixo do outro elemento. Além disso, a `largura e altura` são respeitados. Para padding, margin e border irá funcionar normalmente. Exemplo: `<div>`, `<p>`, `<section>`. 

`inline`vai deixar um elemento do lado do outro. A `largura e altura` não são respeitados no bloco. Para padding, margin e border só funcionará com valores HORIZONTAIS. Exemplo: `<inline>`, `<a>`, `<strong>`, `<span>`, `<em>`

