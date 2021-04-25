---
layout: post
title:  "ES6: arrow functions em 5 minutos"
description: "5 minutos pra entender como utilizar as arrow functions."
type: Post
date: 2016-01-12
image: "https://cloud.githubusercontent.com/assets/1345662/12060339/882c0d30-af54-11e5-9f10-79da8f4f1f50.jpg"
alt: "Caminho de uma estrada coberta de neve em volta"
lang: pt-br
url_en: /arrow-functions/
url_br: /es6-arrow-functions/
category: 'tech'
permalink: 'es6-arrow-functions/'
ref: 'es6-arrow-functions'
---

As *arrow functions* a princípio podem parecer confusas (experiência própria *(◕︵◕)*), mas depois de um tempo, é possível entender sua sintaxe mais curta e a mágica do escopo do `this`.

## Vários parâmetros

Sem *arrow functions*. 

{% gist 626c4a6b56ad2b62cbe4e0a7fe40716a %}

Com *arrow functions*.

{% gist 844f96371b682d794e1ca80dd21c7a21 %}

Ou de uma maneira um pouco mais curta.

{% gist 8f4db1cf3552cc6dbcb21ebb066ce8db %}

## Apenas um parâmetro

Sem *arrow functions*.

{% gist a7c3c0afabebd5d052145e7ff9041261 %}

Com *arrow functions*.

{% gist 44471c6936134258786e1c49ae70293a %}

## Escopo

Sem *arrow functions*.

{% gist c7428936b07a20bdee21b06246c98277 %}

Com *arrow functions*.

{% gist 135be9697afeda35c0fe965dd557cb14 %}

## Exemplo com `map`

Sem *arrow functions*.

{% gist 5d019f714f6bd025cc9a5b3764f659b7 %}

Com *arrow functions*.

{% gist 0e54e7876eebb048034d0c40d16a61f8 %}

[Aqui](http://jsbin.com/nogobe/edit?js,console) você encontra um JS Bin com os exemplos acima.
