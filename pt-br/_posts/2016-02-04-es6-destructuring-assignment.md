---
layout: post
title:  "ES6: destructuring assignment"
description: "Pegando dados de um jeito mais bonito e fácil."
type: Post
date: 2016-02-04
image: "https://cloud.githubusercontent.com/assets/1345662/12071845/13d407d4-b0a9-11e5-8a14-95a3bac85cf1.jpg"
alt: "Brinquedo pebolim visto de cima com jogadores nas cores preta e amarela"
lang: pt-br
category: 'tech'
permalink: 'es6-destructuring-assignment/'
ref: 'es6-destructuring-assignment'
---

Conheci o grande *destructuring assignment* através do meu brother [Weslley Araujo](https://twitter.com/_weslleyaraujo), e confesso que achei coisa linda. Ele nada mais é que uma expressão que nos permite *pegar* dados de *objetos* ou *arrays* de uma maneira bem mais simples.

Para pegarmos uma propriedade de um objeto, poderíamos fazer algo assim:

{% gist eb197d540533622a63ce90c26bd725bd %}

Com o mano novo, podemos fazer algo assim: 

{% gist 7a17dc39fcc58c42fe407e343900dc82 %}

##  Com arrays

Se quiséssemos, por exemplo, pegar o primeiro item do `array`, poderíamos fazer algo do tipo:

{% gist 5d04833fa61c5e9bbbe1685f8e163ad5 %}

Com o mano *destructuring*, podemos fazer algo assim:

{% gist 2271f2f884142224df2b1b040d9dbbc8 %}

Ainda é possível, brincar um pouco mais:

{% gist d5cd3bfec872d581a0e87d2836115649 %}

## Usando ao importar arquivos

Uma coisa muito legal de se usar o *mano* **destructuring assignment** é quando precisamos importar *coisas* para os nossos arquivos. Imaginemos que tenhamos um arquivo genérico, como um arquivo *helpers*, algo mais ou menos assim:

{% gist fea8d5b641ddfca3676a4c0dca5e1ddb %}

Legal! Agora em um outro arquivo, vamos imaginar que só iremos precisar dessas duas funções, e não do arquivo inteiro. Podemos fazer algo assim:

{% gist 009dda7f95d0ce2399613469cef4e117 %}

## Aplicando ao `forEach`

Podemos também utilizar no famoso `forEach`. Imaginemos que tenhamos o seguinte cara:

{% gist 5d3357bc4414754bc542dbb597535432 %}

Com isso, poderíamos fazer algo assim:

{% gist 0f6bf72833c65ebc62c165c367cbf3ae %}

Utilizando um combo de [arrow-functions](/es6-arrow-functions) e *destructuring*, poderíamos fazer algo assim: 

{% gist 2abae3213f2d8e50f263618f2276642c %}

## Criando objetos

Podemos criar um objeto assim:

{% gist ca845aa1bf2787f1e938ba74bf4b8022 %}

Dá pra ficar mais legal. *◕‿◕*

{% gist 9bbee4b1a5352c57573b3bbb45118499 %}

[Aqui](http://jsbin.com/qejoyo/edit?js,console) você encontra um JS Bin com os exemplos acima.
