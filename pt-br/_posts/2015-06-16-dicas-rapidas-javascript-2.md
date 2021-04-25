---
layout: post
title:  "Dicas de bolso de JavaScript - parte 2"
description: "Dicas rápidas de JS!"
type: Post
date: 2015-06-16
image: "https://cloud.githubusercontent.com/assets/1345662/11457941/ee3c42fe-969d-11e5-9ded-c9bb7bf2616b.jpg"
alt: 'Imagem mostra uma rua de uma cidade cheias de carros e com prédios altos de ambos os lados'
lang: pt-br
category: 'tech'
permalink: 'dicas-rapidas-javascript-parte-2/'
ref: 'dicas-javascript-2'
---

## Criação de um array

Alguém usa o construtor `new Array()`? Eu particularmente não uso, mas quando vi isso, achei legal deixar registrado pois era algo que não sabia e vai que no dia a dia encontramos algum projeto com isso.

Se criarmos um array através do `new Array()` passando argumentos entre os parênteses, temos um array com esses valores que foram passados. Algo assim:

{% gist aa279b12ae1daeda1cd84d38d6a096eb %}

Seria o mesmo caso fizéssemos isso:

{% gist 320c1d7a52da47003715fe7e89c0f380 %}

E se passarmos apenas um valor como argumento? Teríamos um array com apenas um item, certo? *Mahomenos...* Aí que vem a pegadinha do *JavaScript* malandro. Se criarmos usando a sintaxe literal, realmente temos um array com apenas um item:

{% gist 30b4d87c4c60841391eaee494a09e2a5 %}

Agora se criarmos usando `new Array()` o que acontece é que esse *único* valor passado como argumento vira o comprimento do array e não um item dele.

{% gist 700da6e447477d82691f5a77535c03c1 %}

## Funções imediatas e parâmetros

Já ouvimos bastante a respeito de funções imediatas, correto? Recapitulando rapidamente, ela permite que uma função seja executada assim que seja definida. Isso é bom principalmente pelo fato de fornecer um escopo temporário para a mágica que você vai fazer, sem a necessidade de poluir seu escopo global.

{% gist 44282b1c5dc3a846d8c0eb083b8d44ac %}

Uma coisa bacana é que podemos passar argumentos para as funções imediatas. Podemos então ter algo assim:

{% gist 08c5e9ab6de39dd276986d335b36aff2 %}

Como [observado](https://github.com/raphaelfabeni/raphaelfabeni.github.io/pull/15) pelo [Mauricio Soares](https://twitter.com/omauriciosoares), uma grande vantagem de passar parâmetros para uma função imediata (IIFE), é que esse valor é passado como uma cópia, e não como uma referência... Isto significa que se alterarmos o valor desse parâmetro dentro da IIFE, esse valor não vai persistir fora dela... por exemplo:

{% gist 4d83c2e5ddc8c7aabad3822173e402bc %}

Isso é bom para criarmos cópias de variaveis globais, e garantirmos que se alguem sobreescrever essa variável, isso não vai influenciar o módulo que criamos. Esse comportamento também é conhecido como Closure.

**ProTip**: É uma excelente prática passarmos o jQuery, window por exemplo,como parâmetros para IIFE's.

## `call` e `apply` sem medo

Esses dois caras são bem semelhantes. Ambos permitem invocar uma função em um outro contexto (que vai ser o *primeiro parâmetro* que você vai passar pra eles) e com os argumentos que passarmos (que serão o *segundo parâmetro* que passarmos). Então, `call` e `apply` permitem que:

* 1º parâmetro => possamos dizer em qual *escopo* uma determinada função deve ser executada;
* 2º parâmetro => consigamos definir os argumentos que serão passados para a função.

O que muda entre `call` e `apply` é a forma de como passar o segundo parâmetro:

* `call` => uma lista de itens (a partir do 2º parâmetro);
* `apply` => um array de elementos.

*Para de falar Fabeni, mostra alguma coisa aí!*

{% gist 2e0b41ebcab0e485892945ac080c05e0 %}

O que temos acima é mais ou menos o seguinte:

* um objeto simples chamado `mister`;
* uma função `hello` que retorna uma `string` de acordo com os parâmetros passados;
* as chamadas das funções usando o formato padrão e usando `call` e `apply`.

Um outro exemplo que talvez possa ajudar: vamos imaginar que possamos ter uma função simples que vai iterar sobre os argumentos dessa função (o objeto `arguments`). Poderíamos pensar em algo assim:

{% gist 472ac62b30b051c20af8062943bdabe1 %}

Aí que vive o problema: vamos ter um erro se tentarmos algo assim.

*TypeError: likeArray.forEach is not a function*

Isso acontece pois o nosso brother `arguments` é um objeto e não um *array*. Pra podermos conseguir usar o `forEach`, precisamos converter `arguments` em um *array* e conseguimos isso utilizando o método `slice`. No entanto, ele é um método que pertence ao `prototype` de `Array`. Daí que vem a pergunta: como fazemos então pra executar a função/método em um outro contexto (executar `slice` no contexto do objeto `arguments`)? A resposta meu caro amigo: `call` ou `apply`.

{% gist af0998ce2a69363801bb3f6058b34677 %}

No exemplo acima, alteramos a linha relacionada à variável `likeArray`, aplicando o método `slice` no contexto de `arguments` através do `call`.

*Referências* => [Learning JavaScript](http://www.amazon.com/Learning-JavaScript-Edition-Shelley-Powers/dp/0596521871)

Deixo aqui meu muito obrigado ao [Mauricio Soares](https://twitter.com/omauriciosoares), ao [Weslley Araujo](https://twitter.com/_weslleyaraujo) e ao [Frederick Silva](https://github.com/fredericksilva) pela revisão e contribuição no texto.
