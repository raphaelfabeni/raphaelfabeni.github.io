---
layout: post
title:  "Jasmine: entendendo os matchers"
description: "Por acaso, você conhece todos os matchers que o Jasmine nos oferece pra brincar?"
type: Post
date: 2015-03-17
image: 'https://cloud.githubusercontent.com/assets/1345662/11458074/e50ba9de-969f-11e5-9983-999042edf9c0.jpg'
alt: 'Cadeado preso em uma grade'
lang: pt-br
category: 'tech'
permalink: 'jasmine-matchers/'
ref: 'jasmine-matchers'
---

Há algum tempo atrás escrevi umas groselhas sobre *Jasmine*, mais uma introdução sobre o *framework* e como escrever testes era algo intuitivo e fácil. Se você tem interesse, o post é o: [Brincando com Jasmine](/brincando-com-jasmine).

Uma parte legal do *Jasmine* e que adianta muito o nosso lado são os *matchers*: de um modo resumido e direto, um *matcher* implementa uma comparação *booleana* entre o valor atual e o valor esperado. É responsável em passar para o *Jasmine* se o que *esperamos* através do nosso teste é *verdadeiro* ou falso. Com base nisso, o *Jasmine* vai passar ou falhar a *spec*.

## `toEqual`

Esse talvez seja o mais básico e um dos que mais iremos usar. Simplemente verifica se duas coisas são iguais (e não necessariamente o mesmo objeto). Por exemplo, as seguintes *expects* iriam passar:

{% gist 0ed590603db82693056f13ee8a4dc1d8 %}

Da mesma forma, as seguintes iriam falhar:

{% gist 2062c35a23d77460f96e08b749f25a69 %}

## `toBe`

O *matcher* `toBe` a princípio parece ser igual ao anterior *toEqual*. A diferença é que `toBe` verifica não só se os dois valores são iguais, mas também como se eles são do mesmo objeto.

Pra podermos ver a diferença entre os dois:

{% gist fdd87cbc383c2de7148857bb666b283d %}

Apesar de *bob* e *john* serem similares, eles não são o mesmo objeto, o que faz a *spec* passar se for usado o *matcher* `toEqual` mas falha se for usado o *matcher* `toBe`. O mesmo acontece para arrays:

{% gist 7bfb7f562da2ad4d3765a33ad1ee771f %}

## `toBeTruthy` e `toBeFalsy`

Para testar se algum valor é avaliado commo *true* ou *false*, podemos usar respectivamente os *matchers* `toBeTruthy` e `toBeFalsy`:

{% gist df8a309583c544ee08aa0b5400a0b495 %}

Se pararmos pra olhar com calma o exemplo anterior podemos notar que a avaliação dos *matchers* `toBeTruthy` e `toBeFalsy` é idêntica ao *JavaScript*. Então temos alguns valores específicos que são considerados *falsy* e todo o restante é avaliado como *truthy*. Pra nossa referência, uma lista dos valores que são avaliados como *falsy* pelo *Jasmine*:

* `false`
* `0`
* `""`
* `undefined`
* `null`
* `NaN`


## `not`

Muitas vezes podemos inverter um *matcher* pra termos certeza de que ele não é um valor `true`. Podemos fazer isso facilmente adicionando o prefixo `.not`:

{% gist 31b988ec613c51afccc5329d0d8a4735 %}

## `toContain`

Conseguimos também verificar se um elemento *está contido* em um *array* ou *string* por exemplo, como o *matcher* `toContain`.

{% gist d2af91591cbba1cdbfe6cd83f71b4f2f %}

## `toBeDefined` e `toBeUndefined`

Da mesma maneira que vimos os *matchers* `toBeTruthy` e `toBeFalsy`, *Jasmine* também nos oferece os benditos `toBeDefined` e `toBeUndefined` que verificam se um valor é `defined` ou `undefined`.

{% gist 9e01001b8aaa88493b9f2d8cf15a899b %}

## `toBeNull`

Direto ao ponto, esse brother simplesmente avalia se um valor é `null`:

{% gist 40cd8f155fceb59aa91db997f20ab0da %}

## `toBeNaN`

Sem muitas delongas, esse *matcher* verifica se um valor é `NaN`:

{% gist d63e167ca15f2ea60730b83f5ef92cf5 %}

## `toBeGreatherThan` e `toBeLessThan`

Esses dois *matchers* verificam se um valor é maior ou menor que um outro valor passado.

{% gist 8172467bb0a3b7b7f3b1d15221f8bd3f %}

## `toBeCloseTo`

Esse *matcher* permite que possamos verificar se um certo número está próximo de um outro número, dado uma certa precisão decimal como segundo argumento. Poderíamos por exemplo, verificar se um número é próximo de `25.23` com um ponto decimal, poderíamos fazer algo assim:

{% gist 10b010faa42859dee0a9812f3bdcd12e %}

## `toMatch`

Esse cara verifica se algum valor está de acordo com base em uma expressão regular.

{% gist e254fcabfe1a49f7788dfc99aefebc79 %}

## `toThrow`

Esse *matcher* permite que verifiquemos se uma função lançou um erro. Como exemplo, vamos imaginar que temos uma função `onlyNumbers` que deve *lançar uma exceção* caso o argumento passado seja uma *string* e não um número. Podemos usar aqui uma *função anônima* para nos facilitar a vida:

{% gist c542efc7c428aa10694286e4e0efa704 %}

## Ufa...

Deu pra ver que o *framework* nos oferece um monte de opção para utilizarmos em nossos testes. É ainda é possível fazer nossos *matchers* customizados, mas vou deixar isso para um próximo post. Se você se interessar mais pelo assunto, recomendo o livro [JavaScript Testing with Jasmine](http://shop.oreilly.com/product/0636920028277.do) que inclusive li recentemente e tive a idéia de escrever o post.
