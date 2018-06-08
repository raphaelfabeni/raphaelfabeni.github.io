---
layout: post
title:  "CSS Scroll Snap Points"
description: "Não é bruxaria, é CSS scroll snap points"
type: Post
date: 2015-10-16
image: "https://cloud.githubusercontent.com/assets/1345662/10500869/3f0ee854-72b2-11e5-94c4-04db468e18ce.jpg"
alt: "Imagem de uma calçada e coqueiro ao fundo atrás de uma grade"
lang: pt-br
url_en: /css-snap-points/
url_br: /css-scroll-snap-points/
category: 'css'
---

Efeitos de *scroll* sempre foram mais relacionados a dispositivos *touch*, no entanto, ultimamente vários projetos tem incorporado esse item, enriquecendo a experência do usuário (claro, pra tudo há exceções).

A solução pra aplicar esse efeito, geralmente era algum plugin jQuery ou algo semelhante e a idéia básica consistia em separar o conteúdo em *áreas* distintas às quais o usuário conseguiria *scrollar* até elas, ou *clicar* em algum botão específico e a página fazer o *scroll automático*.

Aí, vem o mano CSS e fala: "Calma, galera! Tô chegando junto e vamos fazer isso a partir de agora só com CSS."

## CSS Scroll Snap

*Tcharaaaaan*! Basicamente com ele conseguimos controlar o comportamento do conteúdo de um *wrapper* com *scroll* definindo pontos nos eixos x ou y. Com  esses pontos marcados, o *wrapper* vai pular para um desses pontos no conteúdo após o usuário ter feito a ação de *scrollar*. Seria como se falássemos assim: *usuário dá scroll uma vez e vai pra esse ponto! depois vai pra esse outro.. e assim vai.* Olha só a [documentação oficial](http://www.w3.org/TR/css-snappoints-1/ "CSS Snap Points W3 Working Draft").

## Stop talking...

Vamos botar a mão na massa e ver essa maravilha. Já aviso de antemão que até a presente data, o [suporte segundo o Can I Use](http://caniuse.com/#feat=css-snappoints) não é tão legal, então eu recomendo ver os exemplos abaixo no Firefox.

Basicamente o que vamos fazer é o seguinte: criar um elemento pra servir como *wrapper* do conteúdo e configurar propriedades como `overflow`, `width` e `height`. A mágica acontece nos seguintes caras:

* `scroll-snap-type` => onde definimos que iremos utilizar os *snap points*.
* `scroll-snap-points-x` ou `scroll-snap-points-y` => onde iremos definir os *snap points* no eixo horizontal ou vertical.
* `repeat(value)` => passamos isso para uma das propriedades acima, para repetirmos os *snap points* a cada *value* que configurarmos.

Eaí, podemos chegar em umas brincadeiras mais ou menos assim:

<p data-height="483" data-theme-id="4240" data-slug-hash="zvEdRy" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/zvEdRy/'>CSS Snap Points</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<p data-height="434" data-theme-id="4240" data-slug-hash="RWLZBa" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/RWLZBa/'>CSS Snap Points</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Algumas referências e links legais:

* [Sergey Gospodarets - Native CSS Scrol Snap](http://blog.gospodarets.com/css-scroll-snap/)
* [treehouse -Thinking Ahead: CSS Scroll Snap Points](http://blog.teamtreehouse.com/css-scroll-snap-points)


Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
