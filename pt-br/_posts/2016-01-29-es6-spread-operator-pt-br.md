---
layout: post
title:  "ES6: spread operator"
description: "Expanda os dados de um array sorrindo! o/"
type: Post
date: 2016-01-29
image: "https://cloud.githubusercontent.com/assets/1345662/12072840/6360f8ae-b0de-11e5-8584-b748798c95c3.jpg"
alt: "Fogos de artifício coloridos em um céu escuro"
lang: pt-br
category: 'tech'
permalink: 'es6-spread-operator/'
ref: 'es6-spread-operator'
---

O carinha *spread* nos permite extrair/expandir dados de um array agilizando a nossa vida. Confuso? Acho que não consegui explicar. Vamos à prática. Imaginemos os seguintes arrays:

{% gist 4b303e0c106e0e66fceefad0ec9535b2 %}

Se tivéssemos que adicionar os novos *lutadores* ao *array* principal, poderíamos tentar algo assim:

{% gist f72ade99d07e090e372ba1da797463c1 %}

Adicionou mas não ficou do jeito que queríamos. Teríamos então que tratar isso antes, algo mais ou menos assim:

{% gist 8b1589c552ebc70f6f7cbc0365027353 %}

O operador *spread* chega *chutando a porta* e deixando tudo bonitão.

{% gist c08fba8139fa4a17f781084e16f80959 %}

[Aqui](http://jsbin.com/cubiko/edit?js,console) você encontra um JS Bin com os exemplos acima.
