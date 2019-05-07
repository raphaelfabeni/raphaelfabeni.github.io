---
layout: post
title:  "CSS transition"
description: "CSS transition é vida! Use-o em prol de uma melhor UX"
type: Post
date: 2015-02-19
image: 'https://cloud.githubusercontent.com/assets/1345662/11458131/46a52002-96a1-11e5-9b37-f86a9419d8ee.jpg'
lang: pt-br
category: 'css'
---

O CSS3 vem pra ajudar a todos. Pro desenvolvedor a vida fica mais fácil pois é possível chegar a efeitos, que antes precisavam de uma volta gigantesca, de uma forma bem mais simples; e o usuário que pode ganhar uma experiência melhor e mais rápida.

## Transition

Um dos caras que fazem do **CSS3** um negócio tão bacana é a propriedade *transition*. Ao pé da letra e de um jeito bem direto, essa propriedade define como será a transição entre dois *estilos*.

Dois estilos? Ahn? Admito que não sei se *estilo* é a palavra correta, mas pra ficar com algo mais concreto, você pode definir, por exemplo, como vai ser a transição de um elemento:

* na troca de uma classe;
* nos estados `:hover` ou `:focus`.

O que a propriedade *transition* faz é analisar a diferença de valores da(s) propriedade(s) do elemento entre os dois *estados/estilos* e faz com que a transição aconteça de forma mais suave (pode ser customizada) e não de forma brusca como estamos acostumados.

<figure class="text-center loading">
  <p data-height="368" data-theme-id="4240" data-slug-hash="PwRJOj" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/PwRJOj/'>Simple transition</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</figure>

### Como faz?

É bem tranquilo! São 4 propriedades que você tem que definir:

* `transition-property` => a propriedade a qual você vai aplicar a transição (se quiser aplicar em todas, você pode passar o valor *all*);
* `transition-duration` => quanto tempo vai demorar a transição;
* `transition-delay` => tempo que a transição vai demorar pra se iniciar (pode ser omitido e seu valor *default* é 0);
* `transition-timing-function` => como a transição vai progredir no tempo. Aceita os valores *linear*, *ease-out*, *ease-in*, *ease* e uma função personalizada através da *cubic-bezier()* (essa propriedade também pode ser omitida e see valor *default* é *ease*).

Antes que você pergunte: não, você não precisa escrever uma por uma, você pode optar pelo *shortcode transition* :

{% gist 32f0ba442aea19d5038a4ec5ce0e1f07 %}

Dessa maneira, as variações abaixo tem o mesmo efeito:

{% gist 0313639854ef6d1563c3c006cc916596 %}

### Encadeamento de transições

Pode ser que você queira mais de uma transição em um elemento. Nesse momento você tem duas opções distintas:

* passar *all* para *transition-property*, assumindo que as transições terão a mesma duração, delay e *timing-function*;
* ou passar *transições* diferentes para cada propriedade, podendo *brincar* com as propriedades específicas de *transition* para cada uma.

No exemplo abaixo, o primeiro retângulo tem a *transition-property* definido como *all* o que faz que tanto a transição de largura como de *background* tenham as mesmas características de duração, delay e *timing-function*. Já no segundo retângulo, as transições são encadeadas: a primeira transição que é a de largura ocorre e só depois de finalizada que ocorre a transição de *background*. Isso acontece pois essa última tem um delay de *.3 segundos* que é o mesmo tempo de duração da primeira transição.

<figure class="text-center loading">
  <p data-height="360" data-theme-id="4240" data-slug-hash="radJOq" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/radJOq/'>Simple transition (multiple)</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</figure>

## Dicas e suporte

Em relação ao suporte, [segundo o site do Can I Use](http://caniuse.com/#search=transition), funciona a partir do IE10 e dependendo da versão de algum navegador você talvez precise dos prefixos.

A princípio pode parecer algo muito simples, mas com criatividade é possível fazer coisas bem legais e poderosas.

Algum tempo atrás criei um repositório no GitHub chamado [Lab CSS3](http://github.com/raphaelfabeni/lab-css3) com o objetivo de estudar um pouco mais e montar uns exemplos usando *CSS3*. Tem algumas coisas utilizando *transition* como esse [componente de abas](http://www.raphaelfabeni.com.br/lab-css3/transition-tabs.html) e esse *[accordion](http://www.raphaelfabeni.com.br/lab-css3/transition-accordion.html)*. [Tem algumas outras coisas](http://www.raphaelfabeni.com.br/lab-css3/index.html) sobre animation e transform, que pretendo abordar nos próximos posts.

## Conferência CSS Brasil

Já que estamos falando de CSS, esse ano vai rolar a [Conferência CSS Brasil](http://conferenciacssbrasil.com.br), a primeira conferência nacional focada em CSS. A idéia do evento é compartilhar conhecimento e mostrar o poder do CSS. Eaí.. bora? **#dica:** Em parceria com a comunidade [css3br do Facebook](https://www.facebook.com/groups/cssbrazil/), tá rolando um cupom de desconto => *divulgacss3br*. \o/

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


