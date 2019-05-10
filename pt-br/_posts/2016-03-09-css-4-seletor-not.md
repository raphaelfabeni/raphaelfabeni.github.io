---
layout: post
title:  "CSS level 4: seletor not"
description: "A versão do CSS3, agora tunada!"
type: Post
date: 2016-03-09
image: "https://cloud.githubusercontent.com/assets/1345662/13589836/ccd512d4-e4b9-11e5-8f57-505c86b526ea.jpg"
alt: "Vários pedaços de madeira empilhados"
lang: pt-br
category: 'css'
permalink: 'css-not-selector/'
ref: 'css-not'
---

No CSS3 já era possível *excluir* um elemento de uma seleção. Algo mais ou menos assim: 

{% gist 5dfe772b22f356e3c714e0867baf6712 %}

No exemplo acima, selecionamos todos elementos `p` exceto as que tem a classe `highlight`. Já é *coisa linda*, certo? Mas se quiséssemos colocar um *filtro* a mais na negação não é possível. Aí vem o CSS level 4 e dá uma tunada nisso.

{% gist 666bae2a168154d4ce42d1e75f9318c6 %}

No exemplo acima, conseguimos selecionar todos elementos `p` excluindo os que são `:first-child`, `:last-of-type` e que possuem a classe `highlight`.

<figure class="text-center loading">
  <p data-height="345" data-theme-id="4240" data-slug-hash="grPBGm" data-default-tab="result" data-user="raphaelfabeni" class="codepen">See the Pen <a href="http://codepen.io/raphaelfabeni/pen/grPBGm/">:not selector</a> by Raphael Fabeni (<a href="http://codepen.io/raphaelfabeni">@raphaelfabeni</a>) on <a href="http://codepen.io">CodePen</a>.</p>
</figure>

[Aqui](http://codepen.io/raphaelfabeni/pen/grPBGm) é possível ver um exemplo com os códigos acima.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>