---
layout: post
title:  "CSS level 4: seletor matches"
description: "Com base em uma lista de argumentos, selecionar elementos ficou mais fácil."
type: Post
date: 2016-03-07
image: "https://cloud.githubusercontent.com/assets/1345662/13560552/4958f4e4-e3ff-11e5-8de4-20372d14ab0b.jpg"
alt: "Uma caixa de madeira cheia de nozes"
lang: pt-br
url_en: /matches-selector-css-4/
url_br: /css-4-seletor-matches/
category: 'css'
---

CSS3 já era coisa fina. Agora, na sua versão 4, ou melhor dizendo, em seu *nível 4*, como será dividido a partir de agora, tem muita coisa bacana. Uma delas é o seletor `:matches`.

Com ele, podemos substituir por exemplo, uma marcação assim:

{% gist a7b5fc0e8c7d2f5edb983b791adef64d %}

Para algo assim:

{% gist eb85105186b637f39141eb60db5d6593 %}

Ou seja, `atacamos` toda classe `highlight` que seja filha de uma `div` ou `footer`.

Podemos ainda fazer da maneira inversa, como no exemplo abaixo: onde selecionamos todos elementos `p` que tenham a classe `success` ou que seja `":first-child`.

{% gist 5d1e3a873bec33562147be84f0eab917 %}