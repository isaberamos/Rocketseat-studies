# Distâncias absolutas <length>

São fixas e não alteram seu valor.

Unidade     Nome          Equivalência
cm          Centímetros   1cm = 96px/2.54  
in          Inches        1in = 2.54cm = 96px
px          Pixels        1px = 1/96th of 1in

* o mais comum é o **px**
* não é recomendado usar cm

# Distâncias relativas

São relativas a algum valor, pode ser um elemento pai, root ou tamanho da tela.

* Benefício: maior adaptação aos diferentes tipos de tela

Unidade     Relativo a
em          Tamanho da fonte pai    
rem         Tamanho da fonte do elemento raiz
vw          1% da viewport width
vh          1% da viewport height

# Porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias <length>
* Sempre será relativo a algum valor

# Posições

<position> / NB 

Representa um conjunto de coordenadas 2D:
 - top, right, bottom, left e center

 * Usado para alguns tipos de propriedades
 * Não confundir com a propriedade `position`

 # Funções

 Reaproveitamento de código

 * rgb()
 * hsl()
 * url()
 * calc()

 # Strings e identificadores

 * Strings: texto envolto em aspas
 * Identificadores: podem ser nomes de cores, poe exemplo: red, black, gold etc