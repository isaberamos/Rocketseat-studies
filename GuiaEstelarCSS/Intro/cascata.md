# A cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais abaixo é o que será atribuído.

São levados em consideração 3 fatores:

* A origem do estilo;
* A especificidade;
* A importância.

# Origem do estilo

inline > tag style > tag link

# Especificidade

É um cálculo matemático, onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attributes selectors ([type="radio"])
100. ID selector
1000. inline

# Regra Important

* Evitar o uso
* Quebra o fluxo da cascata
* Usada em casos de não ter outra opção para priorizar um elemento da cascata

# At-rules (@)

* Está relacionado ao comportamento do CSS
* Começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

- @import     /* inclui um CSS externo */

- @media      /* regras condicionais para dispositivos */

- @font-faces /* fontes externas */

- @keyframes  /* Animation */

# Shorthand - Agrupamentos

* junção da propriedade
* resumido
* legível

# Funções

* nome seguido de abre e fecha parênteses
* recebe argumentos

## Exemplos

```css
@import url ("http://urlaqui.com/style.css)

{
    color: rgb(255, 0, 100)
}
```