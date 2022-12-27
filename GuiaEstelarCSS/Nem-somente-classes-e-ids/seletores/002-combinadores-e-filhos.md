# Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores
* Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho

HTML

<body>
	<article>
		<h2>Um Título</h2>
	</article>
</body>

CSS

body article h2 {
	color: red;
}

OU

h2 {
	color: red;
}


# Child combinator

* Identificado pelo sinal > entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

HTML

<body>
  <ul>
    <li>Item 1</li> # Aqui será azul
    <ul>
      <li>Item 2</li> # Aqui não irá alterar
    </ul>
  </ul>
</body>

CSS

body > ul > li {
	color: blue;
}

AQUI VAI TORNAR TUDO VERMELHO 
ul > li {
	color: red;
}