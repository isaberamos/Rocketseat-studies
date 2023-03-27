Usamos CSS para alterar cores do nosso documento.

# Tipos
* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros

# Valores
* Podemos definir valores por:
* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

# Background

* A propriedade `background-color` define a cor de fundo do elemento selecionado.
* Para adicionar uma imagem como background podemos usar a propriedade background-image e por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade background-repeat. Por exemplo: 

/* Values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

* Com a propriedade `background-position` podemos mudar a posição da imagem do background.

/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;


* Para mudar o tamanho da imagem do background usamos a propriedade `background-size`. Exemplo:

/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;

* A propriedade `background-origin` é quem define o ponto de origem de uma imagem específica.

/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

* O `background-clip` define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

* A propriedade `background-attachment` determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

/* Principais valores */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

* Podemos usar o shorthand background para definir todos os valores do background
background: rgb(250, 100, 50), url(nomedaurl.com.br) no repeat right top / 50px border-box content-box;


* linear-gradient() é a função usada para criar gradient linear com o CSS.
background: linear-gradient(45deg, red, yellow)
* radial-gradient() é a função usada para criar gradient circular.
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))

* Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background.
background: rgba(250, 100, 50), rgba(255,0,0,0.2)), url(nomedaurl.com.br) no repeat right top / 50px border-box content-box;
