---
layout: post
title:  "Dicas de bolso de JavaScript - parte 1"
description: "Dicas rápidas de JavaScript, uma linguagem beeem legal mas cheia de pegadinhas do malandro."
type: Post
date: 2015-04-14
image: 'https://cloud.githubusercontent.com/assets/1345662/11458020/8dbf5630-969f-11e5-86d5-83d700a53ec7.jpg'
alt: 'Cadeira de madeira vermelha em um quintal coberto de neve'
lang: pt-br
category: 'javascript'
permalink: 'dicas-rapidas-javascript/'
ref: 'dicas-javascript'
---

## Guarde o tamanho do array

Com nossos brothers loops `for`, conseguimos iterar em arrays ou também em objetos semelhantes a arrays. Semelhantes? Como assim!? Por exemplo os objetos `arguments` e `HTMLCollection`. Provavelmente você já deve ter se deparado com um loop `for` (já deve ter escrito alguns):

{% gist 0ca8ca025a463069c69cb945a63622c4 %}

De bate pronto, conseguimos perceber algo não tão bacana no código acima. O comprimento (`length`) do array é acessado em toda iteração do loop. Isso não fica tão legal quando por exemplo, o objeto é um `HTMLCollection`. Lembra o que são esses caras? Eles que são retornados quando a gente chama:

* `getElementsByName()`
* `getElementsByClassName()`
* `getElementsByTagName()`

Tá! Legal! Mas eaí né?! A zica mesmo é que toda vez que a gente itera sobre esses caras significa que estamos consultando o nosso *DOM* ao vivo e a cores, e a *toda hora*, o que não é nada bacana.

Com base nisso, uma solução que podemos chegar seria *guardarmos* o comprimento do array; algo parecido com isso:

{% gist ceb6159c8ef9cc3f212951c8070bdaab %}

O que fizemos acima foi armazenar o valor da propriedade `length`, evitando assim ter que calculá-la a cada iteração do loop.

## Verifique se a propriedade pertence àquele objeto

Além do nosso amigo do exemplo anterior temos o loop `for-in` que usamos pra iterar em objetos. Uma coisa bacana de se fazer e que pode evitar que algo que você não queira aconteça, é usar o método `hasOwnProperty()`. Esse método simplesmente vai filtrar apenas as propriedades do objeto em si, excluindo as propriedades herdadas pelo `prototype`.

Um exemplo rápido:

{% gist 9939db18667534ec5e3f706418f87a80 %}

Aí em uma parte obscura, aparece algo que adiciona uma propriedade a todos os objetos.

{% gist a690c84ae4728f8c16dc42052761816b %}

O que aconteceu acima foi que verificamos se existe a propriedade `feijao` em `Object` e, caso ela não exista definimos ela com o valor `preto`. Aí que está o negócio da coisa, nosso objeto `burger`, já herda a propriedade `feijao` via `prototype`.

Com isso, para evitarmos que `feijao` apareça quando listarmos as propriedades de `burger` (até porque feijão, na minha opinião, não combina muito com hamburguer), fazemos o seguinte:

{% gist 0b4271fe4b9ccf8090d7de3872593b75 %}

Do contrário, caso não fizéssemos essa verificação, teríamos algo assim:

{% gist 6204a86627b272f6a83b5ff0bfd3e0e4 %}

*Referências* => [Learning JavaScript](http://www.amazon.com/Learning-JavaScript-Edition-Shelley-Powers/dp/0596521871)

Obs. Queria deixar aqui meu *muito obrigado* ao [Ademílson Tonato](https://github.com/ftonato) pela ajuda na correção do post.
