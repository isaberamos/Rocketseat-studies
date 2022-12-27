# É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

* Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

* Pseudo-classes começam com 2 pontos seguido do nome da pseudo class :pseudo-class-name


# first-child
É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>

CSS

ul li:first-child {
  font-weight: bold;
}


# :nth-of-type()
Pega o elemento por tipo e posição

HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>

CSS

ul li:nth-of-type(1) { # Coloca o primeiro parágrafo em negrito
  font-weight: bold;
}


# :nth-child()

É quando queremos selecionar o primeiro filho de um grupo de elementos, ou seja, é considerado o pseudo-class para o principal, no caso abaixo, o <ul>

HTML

<ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>

CSS

ul li:nth-child(2) { # Aqui ele vai pegar o "Esperança" porque ele ta especificando que é do tipo "li"
  font-weight: bold;
}


# :nth-child(odd) e :nth-child(even)

even - números pares
odd - números ímpares

HTML

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul

CSS

ul li:nth-child(odd) { # "Gratidão" e "Fé" ficará com a cor cinza
  color: gray;
}


# Ações do usuário
Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

:hover

a:hover {
  color: red;
}
Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

:focus é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

input:focus {
  border-color: red;
}


# Também podemos usar atributos para selecionar elementos no CSS

Atributos
:disabled

HTML

<input type="text" disabled>

CSS

input:disabled {
  background-color: green;
}

:required

HTML

<input type="text" required>
CSS

input:required {
  background-color: red;
}

Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
